import * as stylex from '@stylexjs/stylex';

import type { IStyleVars } from '@/helpers/types';
import type { ISelectStyleVarKey } from '@/components/atoms/Select';
import { componentVars as baseComponentVars } from './Select.stylex';
import { colorRolesVars } from '../vars/colorRoles.stylex';
import { shapeVars } from '../vars/shape.stylex';
import { stateVars } from '../vars/state.stylex';

// https://github.com/material-components/material-web/blob/main/tokens/_md-comp-filled-select.scss
// https://github.com/material-components/material-web/blob/main/tokens/v0_192/_md-comp-filled-select.scss
const vars: Partial<IStyleVars<ISelectStyleVarKey>> = {
  // textFieldContainer
  textFieldContainerShape: shapeVars.cornerTop$xs,
  // &:disabled
  textFieldContainerColor$disabled: colorRolesVars.onSurface,
  textFieldContainerOpacity$disabled: '0.04',

  // textFieldActiveIndicator
  textFieldActiveIndicatorColor: colorRolesVars.onSurfaceVariant,
  textFieldActiveIndicatorHeight: '1px',
  // &:disabled
  textFieldActiveIndicatorColor$disabled: colorRolesVars.onSurface,
  textFieldActiveIndicatorHeight$disabled: '1px',
  textFieldActiveIndicatorOpacity$disabled: stateVars.opacity$disabled,
  // &:focus
  textFieldActiveIndicatorColor$focus: colorRolesVars.primary,
  textFieldActiveIndicatorHeight$focus: '3px',
  // &:hover
  textFieldActiveIndicatorColor$hover: colorRolesVars.onSurface,
  textFieldActiveIndicatorHeight$hover: '1px',
  // &:error
  textFieldActiveIndicatorColor$error: colorRolesVars.error,
  // &:error:focus
  textFieldActiveIndicatorColor$error$focus: colorRolesVars.error,
  // &:error:hover
  textFieldActiveIndicatorColor$error$hover: colorRolesVars.onErrorContainer,

  // textFieldInputText
  // &:error:hover
  textFieldInputTextColor$error$hover: colorRolesVars.onSurface,
};

export const componentTheme = stylex.createTheme(baseComponentVars, vars);
