import { useState } from 'react';
import stylex from '@stylexjs/stylex';

import type { IItemRenderer } from '@/components/utils/FilteredList';
import { ReactComponent as TriangleDownIcon } from '@/assets/TriangleDown.svg';
import { ReactComponent as TriangleUpIcon } from '@/assets/TriangleUp.svg';
import { ReactComponent as XMarkIcon } from '@/assets/XMark.svg';
import { ListItem } from '@/components/atoms/ListItem';
import { TextField } from '@/components/atoms/TextField';
import { MenuList } from '@/components/atoms/MenuList';
import { InputChip } from '@/components/atoms/Chip';
import { useControlledValue } from '@/hooks/useControlledValue';
import { commonStyles } from '@/helpers/commonStyles';
import { IconButton } from '@/components/atoms/IconButton';
import {
  FloatingFilteredList,
  type IFloatingFilteredListProps,
} from '@/components/utils/FloatingFilteredList';
import {
  areMoviesEqual,
  createMovie,
  filterMovie,
  isMovieDisabled,
  renderCreateMovieListItem,
  renderMovieListItem,
  TOP_100_MOVIES,
  type IMovie,
} from '@/components/utils/FilteredList/movies';
import {
  arrayContainsItem,
  maybeAddCreatedItemToArrays,
  maybeDeleteCreatedItemFromArrays,
} from '@/components/utils/FloatingFilteredList/utils';

export type IMultiComboboxDemoProps = IFloatingFilteredListProps<IMovie> & {
  value?: Array<IMovie>;
  defaultValue?: Array<IMovie>;
  onChange: (value: Array<IMovie>) => void;
};

const styles = stylex.create({
  chip: {
    marginRight: '0.5rem',
  },
});

const fieldStyles = stylex.create({
  contentSlot: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    rowGap: '0.5rem',
    flexWrap: 'wrap',
  },
});

export const MultiComboboxDemo: React.FC<IMultiComboboxDemoProps> = (props) => {
  const { value, defaultValue, onChange, ...other } = props;
  const [items, setItems] = useState(TOP_100_MOVIES);
  const [createdItems, setCreatedItems] = useState<Array<IMovie>>([]);
  const [selectedItems, setSelectedItems] = useControlledValue({
    controlled: value,
    default: defaultValue ?? [],
    name: 'FloatingFilteredListDemo',
  });
  const [focusedSelectedItemIndex, setFocusedSelectedItemIndex] =
    useState<number>();

  const canFilter = true;

  const getSelectedFilmIndex = (film: IMovie): number => {
    const index = selectedItems.indexOf(film);

    return index !== undefined && index >= 0 ? index : -1;
  };

  const isFilmSelected = (film: IMovie): boolean =>
    getSelectedFilmIndex(film) >= 0;

  const selectFilms = (filmsToSelect: Array<IMovie>): Array<IMovie> => {
    let nextCreatedItems = createdItems.slice();
    let nextFilms = selectedItems.slice();
    let nextItems = items.slice();

    filmsToSelect.forEach((filmToSelect) => {
      const results = maybeAddCreatedItemToArrays(
        areMoviesEqual,
        nextItems,
        nextCreatedItems,
        filmToSelect,
      );
      nextItems = results.items;
      nextCreatedItems = results.createdItems;
      // Avoid re-creating an item that is already selected (the "Create
      // Item" option will be shown even if it matches an already selected
      // item).
      nextFilms = !arrayContainsItem(areMoviesEqual, nextFilms, filmToSelect)
        ? [...nextFilms, filmToSelect]
        : nextFilms;
    });

    setCreatedItems(nextCreatedItems);
    setSelectedItems(nextFilms);
    setItems(nextItems);

    return nextFilms;
  };

  const selectFilm = (filmToSelect: IMovie): Array<IMovie> =>
    selectFilms([filmToSelect]);

  const deselectFilm = (index: number): Array<IMovie> => {
    const film = selectedItems[index];
    const { createdItems: nextCreatedItems, items: nextItems } =
      maybeDeleteCreatedItemFromArrays(
        areMoviesEqual,
        items,
        createdItems,
        film,
      );
    const nextSelectedItems = selectedItems.filter((_film, i) => i !== index);

    setCreatedItems(nextCreatedItems);
    setSelectedItems(nextSelectedItems);
    setItems(nextItems);

    return nextSelectedItems;
  };

  const handleItemSelect = (selectedItem: IMovie): undefined => {
    setFocusedSelectedItemIndex(undefined);

    if (isFilmSelected(selectedItem)) {
      const selectedIndex = getSelectedFilmIndex(selectedItem);
      if (selectedIndex !== undefined) {
        onChange(deselectFilm(selectedIndex));
        other.onItemsRemove?.([selectedItem]);
      }
    } else {
      onChange(selectFilm(selectedItem));
    }

    return undefined;
  };

  const itemRendererWrapper: IItemRenderer<IMovie> = (
    item,
    itemProps,
    buttonRef,
    buttonAttributes,
  ): React.ReactNode => {
    const selected = arrayContainsItem(areMoviesEqual, selectedItems, item);

    return renderMovieListItem(
      item,
      {
        ...itemProps,
        modifiers: {
          ...itemProps.modifiers,
          selected,
        },
      },
      buttonRef,
      buttonAttributes,
    );
  };

  const handleItemRemove = (item: IMovie, index: number): void => {
    onChange(deselectFilm(index));
    other.onItemsRemove?.([item]);
  };

  const handleItemRemoveFocused = (): void => {
    if (focusedSelectedItemIndex === undefined) {
      setFocusedSelectedItemIndex(selectedItems.length - 1);

      return;
    }

    const item = selectedItems[focusedSelectedItemIndex];
    const isLastFocused = focusedSelectedItemIndex === selectedItems.length - 1;
    if (isLastFocused) {
      setFocusedSelectedItemIndex(selectedItems.length - 2);
    }

    handleItemRemove(item, focusedSelectedItemIndex);
  };

  const handleItemFocusPreviousSelected = (): void => {
    if (!selectedItems.length) {
      return;
    }

    const previousIndex =
      focusedSelectedItemIndex === undefined
        ? selectedItems.length - 1
        : Math.max(focusedSelectedItemIndex - 1, 0);

    setFocusedSelectedItemIndex(previousIndex);
  };

  const handleItemFocusNextSelected = (): void => {
    if (!selectedItems.length) {
      return;
    }

    const nextIndex =
      focusedSelectedItemIndex === undefined ||
      focusedSelectedItemIndex === selectedItems.length - 1
        ? undefined
        : focusedSelectedItemIndex + 1;

    setFocusedSelectedItemIndex(nextIndex);
  };

  const handleQueryChange = (): void => {
    setFocusedSelectedItemIndex(undefined);
  };

  const handleClear = (
    onItemsRemove: (
      items: Array<IMovie>,
      event?: React.SyntheticEvent<HTMLElement>,
    ) => void,
    event?: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    event?.stopPropagation();
    if (selectedItems.length) {
      onChange?.([]);
      onItemsRemove(selectedItems, event);
      setSelectedItems([]);
    }
  };

  return (
    <FloatingFilteredList<IMovie>
      {...other}
      // disabled
      onItemSelect={handleItemSelect}
      onItemRemoveFocused={handleItemRemoveFocused}
      items={items}
      // createNewItemPosition='first'
      // defaultSelectedItem={TOP_100_MOVIES[3]}
      // selectedItem={TOP_100_MOVIES[3]}
      // defaultQuery='w'
      renderer={(listProps) => <MenuList>{listProps.itemList}</MenuList>}
      itemRenderer={itemRendererWrapper}
      itemsEqual={areMoviesEqual}
      itemPredicate={canFilter ? filterMovie : undefined}
      noResults={<ListItem disabled>No results.</ListItem>}
      createNewItemFromQuery={createMovie}
      createNewItemRenderer={renderCreateMovieListItem}
      itemDisabled={isMovieDisabled}
      matchTargetWidth
      resetOnSelect
      resetOnClose
      initialFocus={-1}
      onItemFocusPreviousSelected={handleItemFocusPreviousSelected}
      onItemFocusNextSelected={handleItemFocusNextSelected}
      onQueryChange={handleQueryChange}
    >
      {(buttonProps) => (
        <TextField
          end={
            <div
              {...stylex.props(
                commonStyles.horizontalLayout,
                commonStyles.gap$none,
              )}
            >
              {selectedItems.length ? (
                <IconButton
                  icon={<XMarkIcon aria-hidden />}
                  onClick={(event) =>
                    handleClear(buttonProps.onItemsRemove, event)
                  }
                />
              ) : null}
              <IconButton
                tabIndex={-1}
                icon={
                  buttonProps.isOpen ? (
                    <TriangleUpIcon aria-hidden />
                  ) : (
                    <TriangleDownIcon aria-hidden />
                  )
                }
              />
            </div>
          }
          variant='outlined'
          label='Label'
          populated={
            buttonProps.isOpen || !!selectedItems.length || !!buttonProps.query
          }
          innerStyles={{ field: fieldStyles }}
          {...buttonProps.getInputFilterAttributes(
            buttonProps.getButtonAttributes(),
          )}
          ref={buttonProps.buttonRef}
          inputRef={buttonProps.inputFilterRef}
        >
          {selectedItems.map((item, index) => (
            <InputChip
              sx={styles.chip}
              key={index}
              label={item.title}
              visualState={{
                focused: focusedSelectedItemIndex === index ? true : undefined,
              }}
              onDelete={(event) => {
                event.stopPropagation();
                onChange(deselectFilm(index));
                buttonProps.onItemsRemove([item], event);
              }}
            />
          ))}
        </TextField>
      )}
    </FloatingFilteredList>
  );
};
