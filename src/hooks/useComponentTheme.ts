import { useTheme, type IThemeComponents } from '@/components/utils/Theme';

export type IUseComponentThemeResult<
  TThemeComponent extends keyof IThemeComponents,
  TVariantThemeComponent extends keyof IThemeComponents = never,
> = {
  theme: IThemeComponents[TThemeComponent];
  variantTheme?: IThemeComponents[TVariantThemeComponent];
};

export const useComponentTheme = <
  TThemeComponent extends keyof IThemeComponents,
  TVariantThemeComponent extends keyof IThemeComponents = never,
>(
  component: TThemeComponent,
  variantComponent?: TVariantThemeComponent,
): IUseComponentThemeResult<TThemeComponent, TVariantThemeComponent> => {
  const theme = useTheme();

  return {
    theme: theme.components[component],
    variantTheme: variantComponent
      ? theme.components[variantComponent]
      : undefined,
  };
};
