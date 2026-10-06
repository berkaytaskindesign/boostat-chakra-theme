import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const sans = { fontFamily: 'body' };
const serif = { fontFamily: 'serif' };

const size = (fontSize: string, face: typeof sans | typeof serif) =>
  defineStyle({
    fontSize,
    lineHeight: 1.2,
    fontWeight: 'normal',
    letterSpacing: 'normal',
    color: 'foreground',
    ...face,
  });

const heading = defineStyleConfig({
  baseStyle: defineStyle({
    fontFamily: 'heading',
    fontWeight: 'normal',
    letterSpacing: 'normal',
    color: 'foreground',
    lineHeight: 1.2,
  }),
  sizes: {
    xs: size('14px', sans),
    sm: size('16px', sans),
    md: size('20px', serif),
    lg: size('24px', serif),
    xl: size('30px', serif),
    '2xl': size('36px', serif),
    '3xl': size('48px', serif),
    '4xl': size('60px', serif),
  },
  defaultProps: {
    size: 'lg',
  },
});

export default heading;
