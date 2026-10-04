import { numberInputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

import { fieldBase, fieldMetrics, fieldSizeNames, fieldVariants, type FieldSize } from './field';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  numberInputAnatomy.keys,
);

function numberFieldSize(size: FieldSize) {
  const { px, ...rest } = fieldMetrics(size);
  return {
    ...rest,
    paddingInlineStart: px,
    paddingInlineEnd: '32px',
  };
}

const stepperBorder = { borderStartColor: 'border' };
const stepperIcon = {
  fontSize: '12px',
  '& svg': { width: '12px', height: '12px' },
};

const numberInput = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    field: fieldBase,
    stepper: {
      borderStart: '1px solid',
      borderStartColor: 'border',
      color: 'muted-foreground',
      bg: 'transparent',
      ...stepperIcon,
      _hover: {
        bg: 'accent',
        ...stepperBorder,
      },
      _active: {
        bg: 'accent',
        ...stepperBorder,
      },
      _disabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
        _hover: { bg: 'transparent', ...stepperBorder },
      },
    },
  }),
  sizes: Object.fromEntries(
    fieldSizeNames.map((size) => [
      size,
      definePartsStyle({ field: numberFieldSize(size), stepper: stepperIcon }),
    ]),
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

export default numberInput;
