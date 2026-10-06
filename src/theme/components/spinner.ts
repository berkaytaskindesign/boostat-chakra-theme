import { cssVar, defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';
import { keyframes } from '@emotion/react';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const $size = cssVar('spinner-size');

const size = (px: string) =>
  defineStyle({
    [$size.variable]: px,
    width: px,
    height: px,
  });

const spinner = defineStyleConfig({
  baseStyle: defineStyle({
    color: 'muted-foreground',
    borderWidth: '1.5px',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    animation: `${spin} 0.65s linear infinite`,
    width: $size.reference,
    height: $size.reference,
  }),
  sizes: {
    xs: size('12px'),
    sm: size('16px'),
    md: size('20px'),
    lg: size('24px'),
    xl: size('32px'),
  },
  defaultProps: {
    size: 'md',
  },
});

export default spinner;
