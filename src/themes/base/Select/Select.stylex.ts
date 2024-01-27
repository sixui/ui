import * as stylex from '@stylexjs/stylex';

import type { IStyleVars } from '@/helpers/types';
import type { ISelectStyleVarKey } from '@/components/atoms/Select';
import { componentVars as elevationVars } from '../Elevation/Elevation.stylex';
import { colorRolesVars } from '../vars/colorRoles.stylex';
import { shapeVars } from '../vars/shape.stylex';
import { typescaleVars } from '../vars/typo.stylex';
import { stateVars } from '../vars/state.stylex';

// https://github.com/material-components/material-web/blob/main/tokens/_md-comp-filled-select.scss
// https://github.com/material-components/material-web/blob/main/tokens/v0_192/_md-comp-filled-select.scss
// https://github.com/material-components/material-web/blob/main/tokens/_md-comp-outlined-select.scss
// https://github.com/material-components/material-web/blob/main/tokens/v0_192/_md-comp-outlined-select.scss
const vars: Partial<IStyleVars<ISelectStyleVarKey>> = {
  // menuCascadingMenuIndicator
  menuCascadingMenuIndicatorIconColor: colorRolesVars.onSurfaceVariant,
  menuCascadingMenuIndicatorIconSize: '24px',

  // menuDivider
  menuDividerColor: colorRolesVars.surfaceVariant,
  menuDividerHeight: '1px',

  // menuContainer
  menuContainerColor: colorRolesVars.surfaceContainer,
  menuContainerElevation: elevationVars.boxShadow$level2,
  menuContainerShape: shapeVars.corner$xs,

  // menuListItemContainer
  menuListItemContainerHeight: '48px',
  // &:selected
  menuListItemContainerColor$selected: colorRolesVars.surfaceContainerHighest,

  // enuListItemLabel
  menuListItemLabelTextColor: colorRolesVars.onSurface,
  menuListItemLabelTextFont: typescaleVars.labelFont$lg,
  menuListItemLabelTextLineHeight: typescaleVars.labelLineHeight$lg,
  menuListItemLabelTextSize: typescaleVars.labelSize$lg,
  menuListItemLabelTextTracking: typescaleVars.labelTracking$lg,
  menuListItemLabelTextWeight: typescaleVars.labelWeight$lg,

  // menuListItemWithLeadingIcon
  menuListItemWithLeadingIconLeadingIconColor: colorRolesVars.onSurfaceVariant,
  menuListItemWithLeadingIconLeadingIconSize: '24px',

  // menuListItemWithTrailingIcon
  menuListItemWithTrailingIconTrailingIconColor:
    colorRolesVars.onSurfaceVariant,
  menuListItemWithTrailingIconTrailingIconSize: '24px',

  // textFieldContainer
  textFieldContainerColor: colorRolesVars.surfaceContainerHighest,

  // textFieldInputText
  // &:disabled
  textFieldInputTextColor$disabled: colorRolesVars.onSurface,
  textFieldInputTextOpacity$disabled: stateVars.opacity$disabled,
  // &:focus
  textFieldInputTextColor$focus: colorRolesVars.onSurface,
  // &:hover
  textFieldInputTextColor$hover: colorRolesVars.onSurface,
  // &:error
  textFieldInputTextColor$error: colorRolesVars.onSurface,
  // &:error:focus
  textFieldInputTextColor$error$focus: colorRolesVars.onSurface,

  // textFieldLabelText
  // &:disabled
  textFieldLabelTextColor$disabled: colorRolesVars.onSurface,
  textFieldLabelTextOpacity$disabled: stateVars.opacity$disabled,
  textFieldInputTextColor: colorRolesVars.onSurface,
  textFieldInputTextFont: typescaleVars.bodyFont$lg,
  textFieldInputTextLineHeight: typescaleVars.bodyLineHeight$lg,
  textFieldInputTextSize: typescaleVars.bodySize$lg,
  textFieldInputTextTracking: typescaleVars.bodyTracking$lg,
  textFieldInputTextWeight: typescaleVars.bodyWeight$lg,
  // &:focus
  textFieldLabelTextColor$focus: colorRolesVars.primary,
  // &:hover
  textFieldLabelTextColor$hover: colorRolesVars.onSurface,
  // &:error
  textFieldLabelTextColor$error: colorRolesVars.error,
  // &:error:focus
  textFieldLabelTextColor$error$focus: colorRolesVars.error,
  // &:error:hover
  textFieldLabelTextColor$error$hover: colorRolesVars.onErrorContainer,

  // textFieldLeadingIcon
  textFieldLeadingIconColor: colorRolesVars.onSurfaceVariant,
  textFieldLeadingIconSize: '24px',
  // &:disabled
  textFieldLeadingIconColor$disabled: colorRolesVars.onSurface,
  textFieldLeadingIconOpacity$disabled: stateVars.opacity$disabled,
  // &:focus
  textFieldLeadingIconColor$focus: colorRolesVars.onSurfaceVariant,
  // &:hover
  textFieldLeadingIconColor$hover: colorRolesVars.onSurfaceVariant,
  // &:error
  textFieldLeadingIconColor$error: colorRolesVars.onSurfaceVariant,
  // &:error:focus
  textFieldLeadingIconColor$error$focus: colorRolesVars.onSurfaceVariant,
  // &:error:hover
  textFieldLeadingIconColor$error$hover: colorRolesVars.onSurfaceVariant,

  // textFieldSupportingText
  textFieldSupportingTextColor: colorRolesVars.onSurfaceVariant,
  textFieldSupportingTextFont: typescaleVars.bodyFont$sm,
  textFieldSupportingTextLineHeight: typescaleVars.bodyLineHeight$sm,
  textFieldSupportingTextSize: typescaleVars.bodySize$sm,
  textFieldSupportingTextTracking: typescaleVars.bodyTracking$sm,
  textFieldSupportingTextWeight: typescaleVars.bodyWeight$sm,
  // &:disabled
  textFieldSupportingTextColor$disabled: colorRolesVars.onSurface,
  textFieldSupportingTextOpacity$disabled: stateVars.opacity$disabled,
  // &:focus
  textFieldSupportingTextColor$focus: colorRolesVars.onSurfaceVariant,
  // &:hover
  textFieldSupportingTextColor$hover: colorRolesVars.onSurfaceVariant,
  // &:error
  textFieldSupportingTextColor$error: colorRolesVars.error,
  // &:error:focus
  textFieldSupportingTextColor$error$focus: colorRolesVars.error,
  // &:error:hover
  textFieldSupportingTextColor$error$hover: colorRolesVars.error,

  // textFieldStateLayer
  // &:hover
  textFieldStateLayerColor$hover: colorRolesVars.onSurface,
  textFieldStateLayerOpacity$hover: stateVars.stateLayerOpacity$hover,
  // &:error:hover
  textFieldStateLayerColor$error$hover: colorRolesVars.onSurface,
  textFieldStateLayerOpacity$error$hover: stateVars.stateLayerOpacity$hover,

  // textFieldTrailingIcon
  textFieldTrailingIconColor: colorRolesVars.onSurfaceVariant,
  textFieldTrailingIconSize: '24px',
  // &:disabled
  textFieldTrailingIconColor$disabled: colorRolesVars.onSurface,
  textFieldTrailingIconOpacity$disabled: stateVars.opacity$disabled,
  // &:focus
  textFieldTrailingIconColor$focus: colorRolesVars.primary,
  // &:hover
  textFieldTrailingIconColor$hover: colorRolesVars.onSurfaceVariant,
  // &:error
  textFieldTrailingIconColor$error: colorRolesVars.error,
  // &:error:focus
  textFieldTrailingIconColor$error$focus: colorRolesVars.error,
  // &:error:hover
  textFieldTrailingIconColor$error$hover: colorRolesVars.onErrorContainer,

  // textFieldLabelText
  textFieldLabelTextColor: colorRolesVars.onSurfaceVariant,
  textFieldLabelTextFont: typescaleVars.bodyFont$lg,
  textFieldLabelTextLineHeight: typescaleVars.bodyLineHeight$lg,
  textFieldLabelTextPopulatedLineHeight: typescaleVars.bodyLineHeight$sm,
  textFieldLabelTextPopulatedSize: typescaleVars.bodySize$sm,
  textFieldLabelTextSize: typescaleVars.bodySize$lg,
  textFieldLabelTextTracking: typescaleVars.bodyTracking$lg,
  textFieldLabelTextWeight: typescaleVars.bodyWeight$lg,
};

export const componentVars = stylex.defineVars(
  vars as IStyleVars<ISelectStyleVarKey>,
);

// This is a workaround to allow reaplying vars at the component level so that it can uses themed
// vars. See https://github.com/facebook/stylex/issues/162#issuecomment-1853775396
export const componentTheme = stylex.createTheme(componentVars, vars);
