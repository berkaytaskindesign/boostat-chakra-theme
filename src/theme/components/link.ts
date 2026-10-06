import type { ComponentStyleConfig } from '@chakra-ui/react';

const underline = {
  textDecoration: 'underline',
  textDecorationThickness: '1px',
  textUnderlineOffset: '4px',
};

const link: ComponentStyleConfig = {
  baseStyle: {
    color: 'currentColor',
    ...underline,
    textDecorationColor: 'muted-foreground',
    cursor: 'pointer',
    transitionProperty: 'text-decoration-color, box-shadow',
    transitionDuration: '150ms',
    _hover: {
      ...underline,
      textDecorationColor: 'foreground',
      _disabled: {
        ...underline,
        textDecorationColor: 'muted-foreground',
      },
    },
    _focusVisible: {
      boxShadow: 'outline',
    },
    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
  variants: {
    plain: {
      textDecoration: 'none',
      _hover: {
        ...underline,
        textDecorationColor: 'foreground',
        _disabled: {
          textDecoration: 'none',
        },
      },
    },
  },
};

export default link;
