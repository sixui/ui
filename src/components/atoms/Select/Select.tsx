import React from 'react';
import { accumulate } from '@olivierpascal/helpers';

import type { IContainer } from '@/helpers/Container';
import type { IThemeComponents } from '@/helpers/ThemeContext';
import type {
  ISelectStyleKey,
  ISelectStyleVarKey,
  ISelectVariant,
} from './Select.styledefs';
import { stylesCombinatorFactory } from '@/helpers/stylesCombinatorFactory';
import { stylePropsFactory } from '@/helpers/stylePropsFactory';
import { useComponentTheme } from '@/hooks/useComponentTheme';
import { useVisualState } from '@/hooks/useVisualState';
import { Field, type IFieldProps } from '../Field/Field';

/**
 * The default value for the typeahead buffer time in Milliseconds.
 */
// TODO: move in menu component once ready
export const DEFAULT_TYPEAHEAD_BUFFER_TIME = 200;

export interface ISelectProps
  extends IContainer<ISelectStyleKey, ISelectStyleVarKey>,
    Pick<
      IFieldProps,
      | 'disabled'
      | 'required'
      | 'errorText'
      | 'label'
      | 'supportingText'
      | 'error'
    > {
  variant?: ISelectVariant;

  /**
   * Opens the menu synchronously with no animation.
   */
  quick?: boolean;

  /**
   * Whether or not the underlying md-menu should be position: fixed to display
   * in a top-level manner, or position: absolute.
   *
   * position:fixed is useful for cases where select is inside of another
   * element with stacking context and hidden overflows such as `md-dialog`.
   */
  menuPositioning?: 'absolute' | 'fixed' | 'popover';

  /**
   * Clamps the menu-width to the width of the select.
   */
  clampMenuWidth?: boolean;

  /**
   * The max time between the keystrokes of the typeahead select / menu behavior
   * before it clears the typeahead buffer.
   */
  typeaheadDelay?: number;

  /**
   * Text to display in the field. Only set for SSR.
   */
  displayText?: string;

  /**
   * Whether the menu should be aligned to the start or the end of the select's
   * textbox.
   */
  menuAlign?: 'start' | 'end';
}

type ISelectVariantMap = {
  [key in ISelectVariant]: keyof Pick<
    IThemeComponents,
    'FilledSelect' | 'OutlinedSelect'
  >;
};

const variantMap: ISelectVariantMap = {
  filled: 'FilledSelect',
  outlined: 'OutlinedSelect',
};

// https://github.com/material-components/material-web/blob/main/select/internal/select.ts
export const Select: React.FC<ISelectProps> = ({
  variant = 'filled',
  label,
  disabled,
  required,
  displayText,
  supportingText,
  errorText,
  // menuPositioning = 'popover',
  // typeaheadDelay = DEFAULT_TYPEAHEAD_BUFFER_TIME,
  // menuAlign = 'start',
  ...props
}) => {
  const { theme, styles } = useComponentTheme('Select');
  const { theme: variantTheme, styles: variantStyles } = useComponentTheme(
    variantMap[variant],
  );

  const hostElRef = React.useRef<HTMLDivElement>(null);
  const hostVisualState = useVisualState(hostElRef);

  const styleProps = React.useMemo(
    () =>
      stylePropsFactory<ISelectStyleKey, ISelectStyleVarKey>(
        stylesCombinatorFactory(styles, variantStyles, props.styles),
      ),
    [styles, variantStyles, props.styles],
  );

  const visualState = React.useMemo(
    () => accumulate(hostVisualState, props.visualState),
    [hostVisualState, props.visualState],
  );

  const hasError = !!props.error;

  return (
    <div
      {...styleProps(['host'], [theme, variantTheme, props.theme])}
      ref={hostElRef}
    >
      <span
        {...styleProps(['select'])}
        // onBlur={handleBlur}
      >
        <Field
          // TODO:
          // aria-haspopup='listbox'
          // role='combobox'
          // part="field"
          // tabIndex={disabled ? '-1' : '0'}
          // aria-label=${(this as ARIAMixinStrict).ariaLabel || nothing}
          // aria-describedby="description"
          // aria-expanded=${this.open ? 'true' : 'false'}
          // aria-controls="listbox"
          // class="field"
          variant={variant}
          visualState={visualState}
          label={label}
          // .focused=${this.focused || this.open}
          populated={!!displayText}
          disabled={disabled}
          required={required}
          error={hasError}
          // ?has-start=${this.hasLeadingIcon}
          // has-end
          supportingText={supportingText}
          errorText={errorText}
          // @keydown=${this.handleKeydown}
          // @click=${this.handleClick}
        >
          {/* TODO: ${this.renderFieldContent() */}
          {/* TODO: <div id='description' slot='aria-describedby'></div> */}
        </Field>
        {/* TODO: renderMenu() */}
      </span>
    </div>
  );
};
