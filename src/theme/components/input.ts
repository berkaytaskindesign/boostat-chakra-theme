import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

import { addonVariants, fieldBase, fieldSize, fieldSizeNames, fieldVariants } from './field';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys);

const sizes = Object.fromEntries(
  fieldSizeNames.map((size) => [
    size,
    definePartsStyle({
      field: fieldSize(size),
      addon: fieldSize(size),
    }),
  ]),
);

const variants = Object.fromEntries(
  (['outline', 'filled', 'flushed'] as const).map((variant) => [
    variant,
    definePartsStyle({
      field: fieldVariants[variant],
      addon: addonVariants[variant],
    }),
  ]),
);

const input = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    field: fieldBase,
    addon: {
      color: 'muted-foreground',
      borderRadius: 'none',
    },
    element: {
      color: 'muted-foreground',
    },
  }),
  sizes,
  variants,
  defaultProps: {
    variant: 'outline',
    size: 'md',
  },
});

export default input;
