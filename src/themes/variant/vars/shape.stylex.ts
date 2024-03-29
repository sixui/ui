import stylex from '@stylexjs/stylex';

import { shapeVars as baseShapeVars } from '@/themes/base/vars/shape.stylex';

// https://github.com/material-components/material-web/blob/main/tokens/v0_192/_md-sys-shape.scss

export const shapeVars = stylex.defineVars({
  corner$full: '999px',

  corner$xl: '28px',
  cornerTop$xl: '(28px 28px 0px 0px)',

  corner$lg: '12px',
  cornerStart$lg: '(16px 0px 0px 16px)',
  cornerEnd$lg: '(0px 16px 16px 0px)',
  cornerTop$lg: '(16px 16px 0px 0px)',

  corner$md: '12px',

  corner$sm: '8px',

  corner$xs: '4px',
  cornerTop$xs: '(4px 4px 0px 0px)',

  corner$none: '0',
});

export const shapeTheme = stylex.createTheme(baseShapeVars, shapeVars);
