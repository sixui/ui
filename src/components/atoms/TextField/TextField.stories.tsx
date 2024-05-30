import type { Meta, StoryObj } from '@storybook/react';
import stylex from '@stylexjs/stylex';
import { capitalizeFirstLetter } from '@olivierpascal/helpers';

import { sbHandleEvent } from '@/helpers/sbHandleEvent';
import {
  type IComponentPresentation,
  ComponentShowcase,
} from '@/components/utils/ComponentShowcase';
import { fieldBaseVariants } from '@/components/atoms/FieldBase';
import { TextField, type ITextFieldProps } from './TextField';

// https://m3.material.io/components/text-fields/overview
// https://material-web.dev/components/text-field/
// https://github.com/material-components/material-web/blob/main/textfield/demo/stories.ts

const meta = {
  component: TextField,
} satisfies Meta<typeof TextField>;

type IStory = StoryObj<typeof meta>;

const styles = stylex.create({
  host: {
    width: 260,
  },
});

const defaultArgs = {
  sx: styles.host,
  onChange: (...args) => void sbHandleEvent('change', args),
} satisfies Partial<ITextFieldProps>;

const states: Array<IComponentPresentation<ITextFieldProps>> = [
  { legend: 'Enabled' },
  { legend: 'Hovered', props: { visualState: { hovered: true } } },
  { legend: 'Focused', props: { visualState: { focused: true } } },
  {
    legend: 'Disabled',
    props: {
      disabled: true,
    },
  },
];

const rows: Array<IComponentPresentation<ITextFieldProps>> = [
  { legend: 'Empty' },
  { legend: 'Label', props: { label: 'Label' } },
  { legend: 'Placeholder', props: { placeholder: 'Placeholder' } },
  {
    legend: 'Value',
    props: {
      defaultValue: 'Value',
      prefixText: '$',
      suffixText: '.00',
    },
  },
  { legend: 'Clearable', props: { clearable: true } },
  {
    legend: 'Unmaskable',
    props: { type: 'password', unmaskable: true },
  },
  { legend: 'Error', props: { defaultValue: 'Value', hasError: true } },
];

const groups: Array<IComponentPresentation<ITextFieldProps>> = [
  { legend: 'Input' },
  { legend: 'Textarea', props: { type: 'textarea' } },
];

export const Variants: IStory = {
  render: (props) => (
    <ComponentShowcase
      component={TextField}
      props={props}
      cols={fieldBaseVariants.map((variant) => ({
        props: {
          variant,
          placeholder: capitalizeFirstLetter(variant),
        },
      }))}
    />
  ),
  args: defaultArgs,
};

export const Filled: IStory = {
  render: (props) => (
    <ComponentShowcase
      component={TextField}
      props={props}
      cols={states}
      rows={rows}
      groups={groups}
    />
  ),
  args: {
    ...defaultArgs,
    variant: 'filled',
  },
};

export const Outlined: IStory = {
  render: (props) => (
    <ComponentShowcase
      component={TextField}
      props={props}
      cols={states}
      rows={rows}
      groups={groups}
    />
  ),
  args: {
    ...defaultArgs,
    variant: 'outlined',
  },
};

export default meta;
