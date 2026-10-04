import type { ComponentStyleConfig } from '@chakra-ui/react';

import { fieldBase, fieldSizeNames, fieldVariants } from './field';

const textareaSize = {
  height: 'auto',
  h: 'auto',
  minH: '60px',
  py: '8px',
  px: '12px',
  fontSize: 'sm',
};

const textarea: ComponentStyleConfig = {
  baseStyle: {
    ...fieldBase,
    ...textareaSize,
  },
  sizes: Object.fromEntries(fieldSizeNames.map((size) => [size, textareaSize])),
  variants: fieldVariants,
  defaultProps: {
    variant: 'outline',
    size: 'md',
  },
};

export default textarea;
