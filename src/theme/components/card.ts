import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { cssVar } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys);

const $bg = cssVar('card-bg');
const $padding = cssVar('card-padding');
const $shadow = cssVar('card-shadow');
const $radius = cssVar('card-radius');
const $border = cssVar('card-border-width');
const $borderColor = cssVar('card-border-color');

const outline = {
  [$bg.variable]: 'colors.background',
  [$shadow.variable]: 'none',
  [$radius.variable]: '0px',
  [$border.variable]: '1px',
  [$borderColor.variable]: 'colors.border',
  bg: 'background',
  color: 'foreground',
  boxShadow: 'none',
  borderRadius: 'none',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'border',
};

const card = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    container: {
      ...outline,
      '.chakra-card__header + .chakra-card__body': {
        paddingTop: 0,
      },
    },
    header: {
      padding: $padding.reference,
    },
    body: {
      padding: $padding.reference,
      flex: '1 1 0%',
    },
    footer: {
      padding: $padding.reference,
      borderTopWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border',
      fontSize: 'xs',
      fontWeight: 'normal',
      color: 'muted-foreground',
    },
  }),
  sizes: {
    sm: definePartsStyle({
      container: {
        [$padding.variable]: '16px',
        [$radius.variable]: '0px',
        borderRadius: 'none',
      },
    }),
    md: definePartsStyle({
      container: {
        [$padding.variable]: '24px',
        [$radius.variable]: '0px',
        borderRadius: 'none',
      },
    }),
    lg: definePartsStyle({
      container: {
        [$padding.variable]: '32px',
        [$radius.variable]: '0px',
        borderRadius: 'none',
      },
    }),
  },
  variants: {
    outline: definePartsStyle({ container: outline }),
    elevated: definePartsStyle({ container: outline }),
    filled: definePartsStyle({
      container: {
        [$bg.variable]: 'colors.card',
        [$shadow.variable]: 'none',
        [$radius.variable]: '0px',
        [$border.variable]: '0px',
        [$borderColor.variable]: 'transparent',
        bg: 'card',
        color: 'foreground',
        boxShadow: 'none',
        borderRadius: 'none',
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: 'transparent',
      },
    }),
    unstyled: definePartsStyle({
      container: {
        [$shadow.variable]: 'none',
        [$border.variable]: '0px',
        [$radius.variable]: '0px',
        boxShadow: 'none',
        borderWidth: 0,
        borderRadius: 'none',
      },
      header: { [$padding.variable]: '0px', padding: 0 },
      body: { [$padding.variable]: '0px', padding: 0 },
      footer: {
        [$padding.variable]: '0px',
        padding: 0,
        borderTopWidth: 0,
      },
    }),
  },
  defaultProps: {
    variant: 'outline',
    size: 'md',
  },
});

export default card;
