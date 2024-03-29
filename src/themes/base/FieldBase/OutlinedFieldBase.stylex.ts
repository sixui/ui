import stylex from '@stylexjs/stylex';

import type { IStyleVars } from '@/helpers/types';
import type { IFieldBaseStyleVarKey } from '@/components/atoms/FieldBase';
import { componentVars as baseComponentVars } from './FieldBase.stylex';
import { colorRolesVars } from '../vars/colorRoles.stylex';
import { stateVars } from '../vars/state.stylex';
import { shapeVars } from '../vars/shape.stylex';

// https://github.com/material-components/material-web/blob/main/tokens/_md-comp-outlined-text-field.scss
// https://github.com/material-components/material-web/blob/main/tokens/v0_192/_md-comp-outlined-text-field.scss
// https://github.com/material-components/material-web/blob/main/tokens/_md-comp-outlined-field.scss

const vars: Partial<IStyleVars<IFieldBaseStyleVarKey>> = {
  // container
  containerShape: shapeVars.corner$xs,

  // label
  labelTextPaddingBottom: '8px',
  // &:hover
  labelTextColor$hover: colorRolesVars.onSurfaceVariant,

  // outline
  outlineColor: colorRolesVars.outline,
  outlineWidth: '1px',
  outlineLabelPadding: '4px',
  // &:disabled
  outlineColor$disabled: colorRolesVars.onSurface,
  outlineOpacity$disabled: stateVars.outlineOpacity$disabled,
  outlineWidth$disabled: '1px',
  // &:focus
  outlineColor$focus: colorRolesVars.primary,
  outlineWidth$focus: '3px',
  // &:hover
  outlineColor$hover: colorRolesVars.onSurface,
  outlineWidth$hover: '1px',
  // &:error
  outlineColor$error: colorRolesVars.error,
  // &:error:focus
  outlineColor$error$focus: colorRolesVars.error,
  // &:error:hover
  outlineColor$error$hover: colorRolesVars.onErrorContainer,
};

export const componentTheme = stylex.createTheme(baseComponentVars, vars);
