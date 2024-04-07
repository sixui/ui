import type { Meta, StoryObj } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

import { sbHandleEvent } from '@/helpers/sbHandleEvent';
import {
  type IComponentPresentation,
  ComponentShowcase,
} from '@/components/utils/ComponentShowcase';
import { Step, type IStepProps } from './Step';

const meta = {
  component: Step,
} satisfies Meta<typeof Step>;

type IStory = StoryObj<typeof meta>;

const defaultArgs = {
  index: 1,
  connector: null,
} satisfies Partial<IStepProps>;

const rows: Array<IComponentPresentation<IStepProps>> = [
  {
    legend: 'Basic',
  },
  {
    legend: 'With Icon',
    props: {
      icon: <FontAwesomeIcon icon={faGear} />,
    },
  },
  {
    legend: 'With Label',
    props: {
      label: 'Lorem ipsum',
    },
  },
  {
    legend: 'With Supporting Text',
    props: {
      label: 'Lorem ipsum',
      supportingText: 'Lorem ipsum',
    },
  },
];

const cols: Array<IComponentPresentation<IStepProps>> = [
  {
    legend: 'Not completed',
  },
  {
    legend: 'Completed',
    props: {
      completed: true,
    },
  },
  {
    legend: 'Error',
    props: {
      hasError: true,
    },
  },
  {
    legend: 'Disabled',
    props: {
      disabled: true,
    },
  },
];

const groups: Array<IComponentPresentation<IStepProps>> = [
  {
    legend: 'Horizontal',
    props: {
      labelPosition: 'right',
    },
  },
  {
    legend: 'Vertical',
    props: {
      labelPosition: 'bottom',
    },
  },
];

export const NonInteractive: IStory = {
  render: (props) => (
    <ComponentShowcase
      component={Step}
      props={props}
      rows={rows}
      cols={cols}
      groups={groups}
    />
  ),
  args: defaultArgs,
};

export const Interactive: IStory = {
  render: (props) => (
    <ComponentShowcase
      component={Step}
      props={props}
      rows={rows}
      cols={cols}
      groups={groups}
    />
  ),
  args: {
    ...defaultArgs,
    onClick: () => void sbHandleEvent('click'),
  },
};

export default meta;