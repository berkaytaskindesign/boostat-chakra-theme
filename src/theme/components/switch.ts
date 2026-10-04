import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, cssVar } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(switchAnatomy.keys);

const $width = cssVar('switch-track-width');
const $height = cssVar('switch-track-height');

const switchTheme = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    container: {
      _disabled: { opacity: 0.5, cursor: 'not-allowed' },
      '&[data-focus-visible] .chakra-switch__track': { boxShadow: 'outline' },
    },
    track: {
      bg: 'control-off',
      _checked: { bg: 'primary' },
      _focusVisible: { boxShadow: 'outline' },
      _disabled: { opacity: 1, cursor: 'not-allowed' },
    },
    thumb: {
      bg: 'background',
      borderRadius: 'full',
    },
  }),
  sizes: {
    sm: definePartsStyle({
      container: { [$width.variable]: '40px', [$height.variable]: '20px' },
    }),
    md: definePartsStyle({
      container: { [$width.variable]: '40px', [$height.variable]: '20px' },
    }),
    lg: definePartsStyle({
      container: { [$width.variable]: '40px', [$height.variable]: '20px' },
    }),
  },
  defaultProps: { size: 'md' },
});

export default switchTheme;
