import { selectAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

import { fieldBase, fieldMetrics, fieldSizeNames, fieldVariants, type FieldSize } from './field';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(selectAnatomy.keys);

function selectFieldSize(size: FieldSize) {
  const { px, ...rest } = fieldMetrics(size);
  return {
    ...rest,
    paddingInlineStart: px,
    paddingInlineEnd: '32px',
  };
}

const select = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    field: {
      ...fieldBase,
      bg: 'transparent',
      '> option, > optgroup': {
        bg: 'background',
        color: 'foreground',
      },
    },
    icon: {
      color: 'muted-foreground',
      _disabled: { opacity: 0.5 },
    },
  }),
  sizes: Object.fromEntries(
    fieldSizeNames.map((size) => [size, definePartsStyle({ field: selectFieldSize(size) })]),
  ),
  variants: Object.fromEntries(
    (['outline', 'filled', 'flushed'] as const).map((variant) => [
      variant,
      definePartsStyle({ field: fieldVariants[variant] }),
    ]),
  ),
  defaultProps: {
    variant: 'outline',
    size: 'md',
  },
});

export default select;
