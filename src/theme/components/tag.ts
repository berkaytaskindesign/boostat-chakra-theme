import { tagAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { cssVar } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tagAnatomy.keys);

const $minH = cssVar('tag-min-height');
const $minW = cssVar('tag-min-width');
const $fontSize = cssVar('tag-font-size');
const $paddingX = cssVar('tag-padding-inline');

const containerLook = (bg: string, color: string, border: string, borderColor: string) => ({
  bg,
  color,
  border,
  borderColor,
  boxShadow: 'none',
});

const size = (height: string, padding: string, fontSize: string) =>
  definePartsStyle({
    container: {
      h: height,
      minH: height,
      [$minH.variable]: height,
      [$minW.variable]: height,
      fontSize,
      [$fontSize.variable]: fontSize,
      px: padding,
      [$paddingX.variable]: padding,
    },
    closeButton: {
      marginStart: '4px',
      marginEnd: 0,
    },
  });

const tag = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    container: {
      fontWeight: 'normal',
      // Hedvig's descenders sit outside a line box of 1, and TagLabel clips that overflow.
      lineHeight: 'normal',
      borderRadius: 'none',
      bg: 'accent',
      color: 'muted-foreground',
      border: 'none',
      boxShadow: 'none',
    },
    label: {
      lineHeight: 'normal',
      fontWeight: 'normal',
    },
    closeButton: {
      fontSize: '16px',
      w: '16px',
      h: '16px',
      borderRadius: 'none',
      marginStart: '4px',
      marginEnd: 0,
      opacity: 0.7,
      bg: 'transparent',
      _hover: { opacity: 1, bg: 'transparent' },
      _active: { opacity: 1, bg: 'transparent' },
      _focusVisible: { boxShadow: 'outline', bg: 'transparent' },
      _disabled: { opacity: 0.5 },
    },
  }),
  sizes: {
    xs: size('20px', '8px', 'xs'),
    sm: size('24px', '8px', 'xs'),
    md: size('28px', '10px', 'sm'),
    lg: size('32px', '12px', 'sm'),
  },
  variants: {
    subtle: definePartsStyle({
      container: containerLook('accent', 'muted-foreground', 'none', 'transparent'),
    }),
    solid: definePartsStyle({
      container: containerLook('accent', 'muted-foreground', 'none', 'transparent'),
    }),
    outline: definePartsStyle({
      container: containerLook('transparent', 'foreground', '1px solid', 'border'),
    }),
    destructive: definePartsStyle({
      container: containerLook('destructive', 'destructive-foreground', 'none', 'transparent'),
    }),
  },
  defaultProps: {
    size: 'md',
    variant: 'subtle',
  },
});

export default tag;
