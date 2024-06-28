import type { Meta, StoryObj } from '@storybook/react';

import {
  MultiComboboxDemo,
  type IMultiComboboxDemoProps,
} from './MultiComboboxDemo';
import { sbHandleEvent } from '@/helpers/sbHandleEvent';
// import { TOP_100_MOVIES } from './films';

const meta = {
  component: MultiComboboxDemo,
} satisfies Meta<typeof MultiComboboxDemo>;

type IStory = StoryObj<typeof meta>;

const defaultArgs = {} satisfies Partial<IMultiComboboxDemoProps>;

export const Basic: IStory = {
  render: (props) => <MultiComboboxDemo {...props} />,
  args: {
    ...defaultArgs,
    // defaultValue: [TOP_100_MOVIES[0]],
    // defaultQuery: 'xx',
    onChange: (...args) => void sbHandleEvent('onChange', args),
    onItemsRemove: (...args) => void sbHandleEvent('onItemsRemove', args),
  },
};

export default meta;