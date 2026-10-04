import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, cssVar } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  checkboxAnatomy.keys,
);

const $size = cssVar('checkbox-size');

const checked = {
  bg: 'control-checked',
  borderColor: 'border',
  color: 'foreground',
};

const checkbox = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    container: {
      _disabled: { opacity: 0.5, cursor: 'not-allowed' },
      '&[data-focus-visible] .chakra-checkbox__control': { boxShadow: 'outline' },
    },
    control: {
      border: '1px solid',
      borderColor: 'border',
      borderRadius: 'none',
      bg: 'transparent',
      color: 'foreground',
      _checked: {
        ...checked,
        _hover: checked,
        _disabled: checked,
      },
      _indeterminate: {
        ...checked,
        _hover: checked,
        _disabled: checked,
      },
      _disabled: {
        bg: 'transparent',
        borderColor: 'border',
        color: 'foreground',
      },
      _focusVisible: { boxShadow: 'outline' },
      _invalid: { borderColor: 'border', boxShadow: 'none' },
    },
    label: {
      fontSize: 'sm',
      color: 'foreground',
      ml: '8px',
      _disabled: { opacity: 1 },
    },
    icon: { color: 'foreground' },
  }),
  sizes: {
    sm: definePartsStyle({
      control: { [$size.variable]: '16px', w: '16px', h: '16px' },
      icon: { fontSize: '16px', w: '16px', h: '16px' },
    }),
    md: definePartsStyle({
      control: { [$size.variable]: '16px', w: '16px', h: '16px' },
      icon: { fontSize: '16px', w: '16px', h: '16px' },
    }),
    lg: definePartsStyle({
      control: { [$size.variable]: '16px', w: '16px', h: '16px' },
      icon: { fontSize: '16px', w: '16px', h: '16px' },
    }),
  },
  defaultProps: { size: 'md' },
});

export default checkbox;
