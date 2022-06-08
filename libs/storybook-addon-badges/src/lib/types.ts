import { ComponentProps, CSSProperties } from 'react';
import { TooltipMessage } from '@storybook/components';

export type TooltipConfig =
  | Omit<ComponentProps<typeof TooltipMessage>, 'children'>
  | string;

export type BadgeConfig = {
  title?: string;
  // @deprecated: Color has been deprecated, please use the `styles` property.
  color?: string;
  // @deprecated: Contrast has been deprecated, please use the `styles` property.
  contrast?: string;
  styles?: {
    backgroundColor?: CSSProperties['backgroundColor'];
    borderColor?: CSSProperties['borderColor'];
    borderRadius?: CSSProperties['borderRadius'];
    borderStyle?: CSSProperties['borderStyle'];
    borderWidth?: CSSProperties['borderWidth'];
    color?: CSSProperties['color'];
    fontSize?: CSSProperties['fontSize'];
    fontFamily?: CSSProperties['fontFamily'];
    fontWeight?: CSSProperties['fontWeight'];
    lineHeight?: CSSProperties['lineHeight'];
    textTransform?: CSSProperties['textTransform'];
    paddingInline?: CSSProperties['paddingInline'];
    paddingBlock?: CSSProperties['paddingBlock'];
  };
  tooltip?: TooltipConfig;
};

export interface BadgesConfig {
  [id: string]: BadgeConfig;
}

export interface BadgeProps {
  badge: string;
  config: BadgeConfig;
}
