import { radioAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(radioAnatomy.keys);

const checked = {
  bg: 'transparent',
  borderColor: 'primary',
  color: 'primary',
};

const radio = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    container: {
      _disabled: { opacity: 0.5, cursor: 'not-allowed' },
      '&[data-focus-visible] .chakra-radio__control': { boxShadow: 'outline' },
    },
    control: {
      border: '1px solid',
      borderColor: 'primary',
      borderRadius: 'full',
      bg: 'transparent',
      color: 'primary',
      _checked: {
        ...checked,
        _hover: checked,
        _disabled: checked,
        _before: {
          content: '""',
          display: 'inline-block',
          w: '50%',
          h: '50%',
          borderRadius: 'full',
          bg: 'currentColor',
        },
      },
      _indeterminate: {
        ...checked,
        _hover: checked,
        _disabled: checked,
      },
      _disabled: {
        bg: 'transparent',
        borderColor: 'primary',
        color: 'primary',
      },
      _focusVisible: { boxShadow: 'outline' },
      _invalid: { borderColor: 'primary', boxShadow: 'none' },
    },
    label: {
      fontSize: 'sm',
      color: 'foreground',
      ml: '8px',
      _disabled: { opacity: 1 },
    },
  }),
  sizes: {
    sm: definePartsStyle({ control: { w: '16px', h: '16px' } }),
    md: definePartsStyle({ control: { w: '16px', h: '16px' } }),
    lg: definePartsStyle({ control: { w: '16px', h: '16px' } }),
  },
  defaultProps: { size: 'md' },
});

export default radio;
