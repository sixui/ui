import type { MapNamespaces } from '@stylexjs/stylex/lib/StyleXTypes';
import stylex from '@stylexjs/stylex';

import type { IStyles } from '@/helpers/types';
import type { IStepConnectorStyleKey } from '@/components/atoms/StepConnector';
import { colorRolesVars } from '../vars/colorRoles.stylex';
import { componentVars as vars } from './StepConnector.stylex';
import { typescaleVars } from '../vars/typo.stylex';

// FIXME: use vars

type IStepConnectorStyles = IStyles<IStepConnectorStyleKey>;
export const styles: MapNamespaces<IStepConnectorStyles> =
  stylex.create<IStepConnectorStyles>({
    host: {
      display: 'flex',
      flexGrow: 1,
    },
    host$horizontal: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    host$vertical: {
      flexDirection: 'column',
      marginLeft: 8 + 12,
    },
    host$rightLabel: {},
    host$bottomLabel: {
      position: 'absolute',
      top: 8 + 12 - 0.5, // - half border
      left: 'calc(-50% + 20px)',
      right: 'calc(50% + 20px)',
    },
    line: {
      borderColor: colorRolesVars.outlineVariant,
      display: 'block',
      flexGrow: 1,
    },
    line$completed: {
      borderColor: colorRolesVars.primary,
    },
    line$horizontal: {
      borderTopStyle: 'solid',
      borderTopWidth: 1,
      minWidth: 12,
    },
    line$vertical: {
      borderLeftStyle: 'solid',
      borderLeftWidth: 1,
      minHeight: 24,
    },
    text: {
      color: colorRolesVars.outline,

      fontFamily: typescaleVars.bodyFont$sm,
      fontSize: typescaleVars.bodySize$sm,
      fontWeight: typescaleVars.bodyWeight$sm,
      lineHeight: typescaleVars.bodyLineHeight$sm,
      letterSpacing: typescaleVars.bodyLetterSpacing$sm,
    },
    text$completed: {
      color: colorRolesVars.primary,
    },
    text$horizontal: {
      paddingLeft: 8,
      paddingRight: 8,
    },
    text$vertical: {
      transform: 'translateX(-50%)',
    },
  });