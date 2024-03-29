import stylex from '@stylexjs/stylex';

import type { IStyleVars } from '@/helpers/types';
import type { IPlaceholderStyleVarKey } from '@/components/atoms/Placeholder';
import { colorRolesVars } from '../vars/colorRoles.stylex';
import { typescaleVars } from '../vars/typo.stylex';
import { shapeVars } from '../vars/shape.stylex';

const vars: IStyleVars<IPlaceholderStyleVarKey> = {
  // container
  containerColor: colorRolesVars.surfaceContainer,
  containerShape: shapeVars.corner$md,

  // crosshairs
  crosshairsColor: colorRolesVars.surfaceContainerHighest,

  // labelText
  labelTextColor: colorRolesVars.onSurface,
  labelTextFont: typescaleVars.labelFont$sm,
  labelTextSize: typescaleVars.labelSize$sm,
  labelTextLineHeight: typescaleVars.labelLineHeight$sm,
  labelTextLetterSpacing: typescaleVars.labelLetterSpacing$sm,
  labelTextWeight: typescaleVars.labelWeight$sm,
};

export const componentVars = stylex.defineVars(vars);

/**
 * This is a workaround to allow reaplying vars at the component level so that
 * it can uses themed vars.
 *
 * @see https://github.com/facebook/stylex/issues/162#issuecomment-1853775396
 */
export const componentTheme = stylex.createTheme(componentVars, vars);
