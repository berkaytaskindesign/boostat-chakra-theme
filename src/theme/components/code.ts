import type { ComponentStyleConfig } from '@chakra-ui/react';

const code: ComponentStyleConfig = {
  baseStyle: {
    fontFamily: 'mono',
    fontWeight: 'normal',
    fontSize: '0.875em',
    px: '4px',
    borderRadius: 'none',
    bg: 'secondary',
    color: 'foreground',
    border: 'none',
    boxShadow: 'none',
  },
  variants: {
    subtle: {
      bg: 'secondary',
      color: 'foreground',
      border: 'none',
      boxShadow: 'none',
    },
    solid: {
      bg: 'primary',
      color: 'primary-foreground',
      border: 'none',
      boxShadow: 'none',
    },
    outline: {
      bg: 'transparent',
      color: 'foreground',
      border: '1px solid',
      borderColor: 'border',
      boxShadow: 'none',
    },
  },
  defaultProps: {
    variant: 'subtle',
  },
};

export default code;
