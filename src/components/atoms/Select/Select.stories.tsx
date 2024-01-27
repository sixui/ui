import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ComponentShowcase } from '@/components/molecules/ComponentShowcase';
import { Select, type ISelectProps } from './Select';

// https://m3.material.io/components/menus/overview
// https://material-web.dev/components/select/
// https://github.com/material-components/material-web/blob/main/select/demo/stories.ts

const meta = {
  component: Select,
} satisfies Meta<typeof Select>;

type IStory = StoryObj<typeof meta>;

const defaultArgs = {} satisfies Partial<ISelectProps>;

const statesProps: Array<Partial<ISelectProps>> = [
  {},
  { visualState: { focused: true } },
  { visualState: { hovered: true } },
  { visualState: { pressed: true } },
];

export const Variants: IStory = {
  render: (args) => (
    <ComponentShowcase
      component={Select}
      props={args}
      colsProps={[{ variant: 'filled' }, { variant: 'outlined' }]}
    />
  ),
  args: defaultArgs,
};

export const Filled: IStory = {
  render: (args) => (
    <ComponentShowcase
      component={Select}
      props={args}
      colsProps={statesProps}
    />
  ),
  args: {
    ...defaultArgs,
    variant: 'filled',
  },
};

export const Outlined: IStory = {
  render: (args) => (
    <ComponentShowcase
      component={Select}
      props={args}
      colsProps={statesProps}
    />
  ),
  args: {
    ...defaultArgs,
    variant: 'outlined',
  },
};

export default meta;
