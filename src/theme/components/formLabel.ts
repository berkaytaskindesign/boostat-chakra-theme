import type { ComponentStyleConfig } from '@chakra-ui/react';

const formLabel: ComponentStyleConfig = {
  baseStyle: {
    fontSize: 'sm',
    fontWeight: 'normal',
    color: 'foreground',
    mb: '8px',
    _invalid: { color: 'destructive-text' },
    _disabled: { opacity: 0.7 },
  },
};

export default formLabel;
