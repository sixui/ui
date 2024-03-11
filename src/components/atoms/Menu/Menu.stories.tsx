import type { Meta, StoryObj } from '@storybook/react';
import stylex from '@stylexjs/stylex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronUp,
  faChevronDown,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';

import { Menu, type IMenuProps } from './Menu';
import { Button } from '@/components/atoms/Button';
import { IconButton } from '@/components/atoms/IconButton';
import { MenuListDivider } from '@/components/atoms/MenuList/MenuListDivider';

const meta = {
  component: Menu,
} satisfies Meta<typeof Menu>;

type IStory = StoryObj<typeof meta>;

const defaultArgs = {} satisfies Partial<IMenuProps>;

const items = [
  <Menu.Item key={0} type='link' disabled>
    Apple
  </Menu.Item>,
  <MenuListDivider key={1} />,
  <Menu.Item key={2} type='link'>
    Banana
  </Menu.Item>,
  <Menu.Item key={3} type='link'>
    Cumcumber
  </Menu.Item>,
];

export const FromButton: IStory = {
  render: (props) => <Menu {...props} />,
  args: {
    ...defaultArgs,
    action: ({ open }) => (
      <Button
        icon={
          <FontAwesomeIcon
            icon={open ? faChevronUp : faChevronDown}
            size='xs'
          />
        }
        trailingIcon
      >
        Open
      </Button>
    ),
    children: items,
  },
};

const fromIconButtonStyles = stylex.create({
  host: {
    display: 'flex',
    paddingLeft: 100,
  },
});

export const FromIconButton: IStory = {
  render: (props) => (
    <div {...stylex.props(fromIconButtonStyles.host)}>
      <Menu {...props} />
    </div>
  ),
  args: {
    ...defaultArgs,
    action: <IconButton icon={<FontAwesomeIcon icon={faEllipsisVertical} />} />,
    children: items,
    anchor: 'right',
  },
};

export default meta;