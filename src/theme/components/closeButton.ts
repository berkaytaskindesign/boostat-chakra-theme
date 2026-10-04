import type { ComponentStyleConfig } from '@chakra-ui/react';

const closeButton: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 'none',
    color: 'foreground',
    bg: 'transparent',
    opacity: 0.7,
    transitionProperty: 'background-color, opacity',
    transitionDuration: '150ms',
    _hover: {
      opacity: 1,
      bg: 'accent',
      _disabled: {
        opacity: 0.5,
        bg: 'transparent',
      },
    },
    _active: {
      opacity: 1,
      bg: 'muted',
      _disabled: {
        opacity: 0.5,
        bg: 'transparent',
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
  sizes: {
    sm: { boxSize: '32px', fontSize: '16px' },
    md: { boxSize: '36px', fontSize: '16px' },
    lg: { boxSize: '40px', fontSize: '20px' },
  },
  defaultProps: {
    size: 'md',
  },
};

export default closeButton;
