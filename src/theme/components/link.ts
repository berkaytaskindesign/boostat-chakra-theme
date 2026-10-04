import type { ComponentStyleConfig } from '@chakra-ui/react';

const link: ComponentStyleConfig = {
  baseStyle: {
    color: 'currentColor',
    textDecoration: 'none',
    cursor: 'pointer',
    transitionProperty: 'text-decoration, box-shadow',
    transitionDuration: '150ms',
    _hover: {
      textDecoration: 'underline',
      textUnderlineOffset: '4px',
      _disabled: {
        textDecoration: 'none',
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
};

export default link;
