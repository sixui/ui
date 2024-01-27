import type { MapNamespaces } from '@stylexjs/stylex/lib/StyleXTypes';
import * as stylex from '@stylexjs/stylex';

import type { IStyles } from '@/helpers/types';
import type { ISelectStyleKey } from '@/components/atoms/Select';

// https://github.com/material-components/material-web/blob/main/select/internal/_shared.scss
type ISelectStyles = IStyles<ISelectStyleKey>;
export const styles: MapNamespaces<ISelectStyles> =
  stylex.create<ISelectStyles>({
    host: {
      color: 'unset',
      minWidth: '210px',
      display: 'inline-flex',
    },
    host$disabled: {
      pointerEvents: 'none',
    },
    field: {
      cursor: 'default',
      outline: 'none',
      width: '100%',
    },
    select: {
      position: 'relative',
      flexDirection: 'column',
      width: '100%',
    },
    // TODO: icon*
    down$close: {
      opacity: 1,
    },
    up$open: {
      opacity: 1,
    },
    menuWrapper: {
      width: 0,
      height: 0,
      maxWidth: 'inherit',
    },
  });

/*
TODO:

.icon.trailing svg,
.icon ::slotted(*) {
  fill: currentColor;
}

.icon ::slotted(*) {
  width: inherit;
  height: inherit;
  font-size: inherit;
}

.icon slot {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.icon.trailing :is(.up, .down) {
  opacity: 0;
  /* 75 ms is half of min(animate open duration, animate closed duration)
  transition: opacity 75ms linear 75ms;
}

.field,
.select,
md-menu {
  min-width: inherit;
  width: inherit;
  max-width: inherit;
  display: flex;
}

md-menu {
  // Not inherited because it is applied every time the menu opens
  min-width: var(--__menu-min-width);
  // Inherits from `.menu-wrapper` because it is applied only when
  // `clampMenuWidth` is true
  max-width: var(--__menu-max-width, inherit);
}

md-menu ::slotted(:not[disabled]) {
  cursor: pointer;
}

*/
