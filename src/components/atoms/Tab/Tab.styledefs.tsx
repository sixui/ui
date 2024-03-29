export const tabVariants = ['primary', 'secondary'] as const;
export type ITabVariant = (typeof tabVariants)[number];

export type ITabStyleKey =
  | 'host'
  | 'host$disabled'
  | 'host$active'
  | 'host$hover'
  | 'background'
  | 'background$disabled'
  | 'labelContainer'
  | 'label'
  | 'label$active'
  | 'label$disabled'
  | 'content'
  | 'content$stacked'
  | 'content$stacked$hasIcon$hasLabel'
  | 'indicator'
  | 'indicator$active'
  | 'icon'
  | 'icon$disabled'
  | 'icon$active';

export type ITabStyleVarKey =
  | 'containerColor'
  | 'containerElevation$disabled'
  | 'containerColor$disabled'
  | 'containerOpacity$disabled'
  | 'containerElevation'
  | 'containerHeight'
  | 'containerShape'
  | 'activeIndicatorColor'
  | 'activeIndicatorHeight'
  | 'activeIndicatorShape'
  | 'stateLayerColor$hover'
  | 'stateLayerOpacity$hover'
  | 'stateLayerColor$pressed'
  | 'stateLayerOpacity$pressed'
  | 'activeStateLayerColor$hover'
  | 'activeStateLayerOpacity$hover'
  | 'activeStateLayerColor$pressed'
  | 'activeStateLayerOpacity$pressed'
  | 'withIconAndLabelTextContainerHeight'
  | 'iconColor'
  | 'iconColor$disabled'
  | 'iconOpacity$disabled'
  | 'iconSize'
  | 'iconColor$focus'
  | 'iconColor$hover'
  | 'iconColor$pressed'
  | 'activeIconColor'
  | 'activeIconColor$focus'
  | 'activeIconColor$hover'
  | 'activeIconColor$pressed'
  | 'labelTextColor'
  | 'labelTextFont'
  | 'labelTextLineHeight'
  | 'labelTextSize'
  | 'labelTextLetterSpacing'
  | 'labelTextWeight'
  | 'labelTextColor$disabled'
  | 'labelTextOpacity$disabled'
  | 'labelTextColor$focus'
  | 'labelTextColor$hover'
  | 'labelTextColor$pressed'
  | 'activeLabelTextColor'
  | 'activeLabelTextColor$focus'
  | 'activeLabelTextColor$hover'
  | 'activeLabelTextColor$pressed';

export type ITabStyleStateVarKey =
  | 'elevation'
  | 'stateLayerColor$disabled'
  | 'stateLayerColor$hover'
  | 'stateLayerOpacity$hover'
  | 'stateLayerColor$pressed'
  | 'stateLayerOpacity$pressed';
