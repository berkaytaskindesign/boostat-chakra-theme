import type { ComponentStyleConfig } from '@chakra-ui/react';

const divider: ComponentStyleConfig = {
  baseStyle: {
    opacity: 1,
    borderColor: 'border',
    borderWidth: '1px',
  },
  variants: {
    solid: {
      borderStyle: 'solid',
      opacity: 1,
      borderColor: 'border',
    },
    dashed: {
      borderStyle: 'dashed',
      opacity: 1,
      borderColor: 'border',
    },
  },
  defaultProps: {
    variant: 'solid',
  },
};

export default divider;
