import type { ComponentStyleConfig } from '@chakra-ui/react';

import { fieldBase, fieldBox, fieldSizeNames, fieldVariants } from './field';

const pinInput: ComponentStyleConfig = {
  baseStyle: {
    ...fieldBase,
    width: 'auto',
    textAlign: 'center',
    px: 0,
  },
  sizes: Object.fromEntries(fieldSizeNames.map((size) => [size, fieldBox(size)])),
  variants: fieldVariants,
  defaultProps: {
    variant: 'outline',
    size: 'md',
  },
};

export default pinInput;
