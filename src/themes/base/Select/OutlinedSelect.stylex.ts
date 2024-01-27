import * as stylex from '@stylexjs/stylex';

import type { IStyleVars } from '@/helpers/types';
import type { ISelectStyleVarKey } from '@/components/atoms/Select';
import { componentVars as baseComponentVars } from './Select.stylex';
import { colorRolesVars } from '../vars/colorRoles.stylex';
import { shapeVars } from '../vars/shape.stylex';
import { stateVars } from '../vars/state.stylex';

// https://github.com/material-components/material-web/blob/main/tokens/_md-comp-outlined-select.scss
// https://github.com/material-components/material-web/blob/main/tokens/v0_192/_md-comp-outlined-select.scss
const vars: Partial<IStyleVars<ISelectStyleVarKey>> = {
  // textFieldContainer
  textFieldContainerShape: shapeVars.corner$xs,

  // textFieldOutline
  textFieldOutlineColor: colorRolesVars.outline,
  textFieldOutlineWidth: '1px',
  // &:disabled
  textFieldOutlineColor$disabled: colorRolesVars.onSurface,
  textFieldOutlineOpacity$disabled: stateVars.containerOpacity$disabled,
  textFieldOutlineWidth$disabled: '1px',
  // &:focus
  textFieldOutlineColor$focus: colorRolesVars.primary,
  textFieldOutlineWidth$focus: '3px',
  // &:hover
  textFieldOutlineColor$hover: colorRolesVars.onSurface,
  textFieldOutlineWidth$hover: '1px',
  // &:error
  textFieldOutlineColor$error: colorRolesVars.error,
  // &:error:focus
  textFieldOutlineColor$error$focus: colorRolesVars.error,
  // &:error:hover
  textFieldOutlineColor$error$hover: colorRolesVars.onErrorContainer,

  // textFieldSupportingText
  // &:error:focus
  textFieldSupportingTextColor$error$focus: colorRolesVars.error,

  // textFieldTrailingIcon
  // &:error:hover
  textFieldTrailingIconColor$error$focus: colorRolesVars.error,

  // textFieldInputText
  // &:error:hover
  textFieldInputTextColor$error$hover: colorRolesVars.onSurface,
};

export const componentTheme = stylex.createTheme(baseComponentVars, vars);
