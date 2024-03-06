import { forwardRef, useMemo } from 'react';

import type { IContainerProps } from '@/helpers/types';
import type { IThemeComponents } from '@/helpers/ThemeContext';
import type {
  ITemplateStyleKey,
  ITemplateStyleVarKey,
  ITemplateVariant,
} from './Template.styledefs';
import { stylesCombinatorFactory } from '@/helpers/stylesCombinatorFactory';
import { stylePropsFactory } from '@/helpers/stylePropsFactory';
import { useComponentTheme } from '@/hooks/useComponentTheme';

export type IVariableTemplateProps = IContainerProps<ITemplateStyleKey> & {
  variant?: ITemplateVariant | false;
  children?: React.ReactNode;
};

type ITemplateVariantMap = {
  [key in ITemplateVariant]: keyof Pick<IThemeComponents, 'VariantTemplate'>;
};

const variantMap: ITemplateVariantMap = {
  variant: 'VariantTemplate',
};

export const VariableTemplate = forwardRef<
  HTMLDivElement,
  IVariableTemplateProps
>(function VariableTemplate(props, ref) {
  const { styles, sx, variant = 'variant', children, ...other } = props;

  const { theme, variantTheme } = useComponentTheme(
    'Template',
    variant ? variantMap[variant] : undefined,
  );
  const stylesCombinator = useMemo(
    () => stylesCombinatorFactory(theme.styles, variantTheme?.styles, styles),
    [theme.styles, variantTheme?.styles, styles],
  );
  const styleProps = useMemo(
    () =>
      stylePropsFactory<ITemplateStyleKey, ITemplateStyleVarKey>(
        stylesCombinator,
      ),
    [stylesCombinator],
  );

  return (
    <div
      {...styleProps(['host', sx], [theme.vars, variantTheme?.vars])}
      ref={ref}
      {...other}
    >
      {children}
    </div>
  );
});
