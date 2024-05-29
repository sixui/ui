export type IStepStyleKey =
  | 'host'
  | 'host$bottomLabel'
  | 'separator'
  | 'buttonContainer'
  | 'buttonContainer$bottomLabel'
  | 'button'
  | 'buttonInner'
  | 'buttonInner$rightLabel'
  | 'buttonInner$bottomLabel'
  | 'bulletPoint'
  | 'bulletPoint$icon'
  | 'bulletPoint$icon$active'
  | 'bulletPoint$icon$completed'
  | 'bulletPoint$icon$disabled'
  | 'bulletPoint$icon$error'
  | 'bulletPoint$text'
  | 'bulletPoint$text$active'
  | 'bulletPoint$text$completed'
  | 'bulletPoint$text$disabled'
  | 'bulletPoint$text$error'
  | 'labelContainer'
  | 'labelContainer$rightLabel'
  | 'labelContainer$bottomLabel'
  | 'label'
  | 'label$interactive'
  | 'label$active'
  | 'label$completed'
  | 'label$error'
  | 'label$disabled'
  | 'supportingText'
  | 'supportingText$interactive'
  | 'supportingText$active'
  | 'supportingText$completed'
  | 'supportingText$error'
  | 'supportingText$disabled'
  | 'connectorContainer'
  | 'connectorContainer$top'
  | 'connectorContainer$bottom'
  | 'connectorContainer$content'
  | 'connectorContainer$horizontal$rightLabel'
  | 'connectorContainer$horizontal$bottomLabel'
  | 'content'
  | 'contentText'
  | 'extensibleConnectorContainer'
  | 'extensibleConnectorContainer$horizontal'
  | 'extensibleConnectorContainer$vertical';

export type IStepStyleVarKey =
  | 'gap'
  | 'leadingSpace'
  | 'trailingSpace'
  | 'topSpace'
  | 'bottomSpace'
  | 'bulletPointSpace'
  | 'connectorShape'
  | 'connectorMinLength'
  | 'containerShape'
  | 'bulletPointSize'
  | 'bulletPointShape'
  | 'bulletPointColor'
  | 'bulletPointTextColor'
  | 'bulletPointTextFont'
  | 'bulletPointTextSize'
  | 'bulletPointTextWeight'
  | 'bulletPointTextLineHeight'
  | 'bulletPointTextLetterSpacing'
  | 'bulletPointColor$active'
  | 'bulletPointTextColor$active'
  | 'bulletPointColor$completed'
  | 'bulletPointTextColor$completed'
  | 'bulletPointColor$error'
  | 'bulletPointTextColor$error'
  | 'bulletPointColor$disabled'
  | 'bulletPointTextColor$disabled'
  | 'bulletPointOpacity$disabled'
  | 'labelTextColor'
  | 'labelTextFont'
  | 'labelTextSize'
  | 'labelTextWeight'
  | 'labelTextLineHeight'
  | 'labelTextLetterSpacing'
  | 'labelTextColor$active'
  | 'labelTextColor$interactive'
  | 'labelTextColor$completed'
  | 'labelTextColor$disabled'
  | 'labelTextOpacity$disabled'
  | 'labelTextColor$error'
  | 'supportingTextColor'
  | 'supportingTextFont'
  | 'supportingTextSize'
  | 'supportingTextWeight'
  | 'supportingTextLineHeight'
  | 'supportingTextLetterSpacing'
  | 'supportingTextColor$interactive'
  | 'supportingTextColor$active'
  | 'supportingTextColor$completed'
  | 'supportingTextColor$disabled'
  | 'supportingTextOpacity$disabled'
  | 'supportingTextColor$error'
  | 'contentTextColor'
  | 'contentTextFont'
  | 'contentTextSize'
  | 'contentTextWeight'
  | 'contentTextLineHeight'
  | 'contentTextLetterSpacing';

export type IStepStyleStateVarKey = 'containerShape';
