import React from 'react';

import { type ISelectProps, Select } from './Select';

export interface IVariantSelectProps extends Omit<ISelectProps, 'variant'> {}

export const OutlinedSelect: React.FC<IVariantSelectProps> = (props) => (
  <Select {...props} variant='outlined' />
);
