import type { MapNamespaces } from '@stylexjs/stylex/lib/StyleXTypes';
import * as stylex from '@stylexjs/stylex';

import type { IStyles } from '@/helpers/types';
import type { ISelectStyleKey } from '@/components/atoms/Select';

// https://github.com/material-components/material-web/blob/main/select/internal/_filled-select.scss
type ISelectStyles = IStyles<ISelectStyleKey>;
export const styles: MapNamespaces<ISelectStyles> =
  stylex.create<ISelectStyles>({
    host: {},
  });
