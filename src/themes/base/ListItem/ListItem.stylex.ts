import stylex from '@stylexjs/stylex';

import type { IStyleVars } from '@/helpers/types';
import type { IListItemStyleVarKey } from '@/components/atoms/ListItem';
import { colorRolesVars } from '../vars/colorRoles.stylex';
import { shapeVars } from '../vars/shape.stylex';
import { stateVars } from '../vars/state.stylex';

// https://github.com/material-components/material-web/blob/main/tokens/_md-comp-list-item.scss
// https://github.com/material-components/material-web/blob/main/tokens/v0_192/_md-comp-list.scss

const vars: Partial<IStyleVars<IListItemStyleVarKey>> = {
  leadingSpace: '16px',
  trailingSpace: '16px',
  topSpace$sm: '4px',
  bottomSpace$sm: '4px',
  topSpace$md: '8px',
  bottomSpace$md: '8px',
  topSpace$lg: '8px',
  bottomSpace$lg: '8px',
  topSpace$xl: '12px',
  bottomSpace$xl: '12px',

  // container
  containerOpacity: '1',
  containerShape: shapeVars.corner$none,
  containerMinHeight$sm: '48px',
  containerMinHeight$md: '56px',
  containerMinHeight$lg: '72px',
  containerMinHeight$xl: '80px',
  // &:disabled
  containerColor$disabled: 'transparent',
  containerOpacity$disabled: stateVars.containerOpacity$disabled,

  // text
  // &:disabled
  textColor$disabled: colorRolesVars.onSurface,
  textOpacity$disabled: stateVars.opacity$disabled,

  // nonText
  // &:disabled
  nonTextColor$disabled: colorRolesVars.onSurfaceVariant,
  nonTextOpacity$disabled: stateVars.opacity$disabled,

  // leadingIcon
  leadingIconSize: '18px',
  // &:disabled
  leadingIconColor$disabled: colorRolesVars.onSurface,
  leadingIconOpacity$disabled: stateVars.opacity$disabled,

  // trailingIcon
  trailingIconSize: '18px',
  // &:disabled
  trailingIconColor$disabled: colorRolesVars.onSurface,
  trailingIconOpacity$disabled: stateVars.opacity$disabled,

  // image
  imageWidth: '56px',
  imageHeight: '56px',

  // video
  videoHeight: '64px',
};

export const componentVars = stylex.defineVars(
  vars as IStyleVars<IListItemStyleVarKey>,
);

/**
 * This is a workaround to allow reaplying vars at the component level so that
 * it can uses themed vars.
 *
 * @see https://github.com/facebook/stylex/issues/162#issuecomment-1853775396
 */
export const componentTheme = stylex.createTheme(componentVars, vars);
