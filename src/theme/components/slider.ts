import { sliderAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, cssVar } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(sliderAnatomy.keys);

const $thumbSize = cssVar('slider-thumb-size');
const $trackSize = cssVar('slider-track-size');

const slider = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    container: {
      _disabled: { opacity: 0.5, cursor: 'not-allowed' },
    },
    track: {
      borderRadius: 'none',
      bg: 'secondary',
      _disabled: { bg: 'secondary' },
    },
    filledTrack: { bg: 'primary' },
    thumb: {
      bg: 'background',
      border: '2px solid',
      borderColor: 'primary',
      borderRadius: 'none',
      boxShadow: 'none',
      _focusVisible: { boxShadow: 'outline' },
      _disabled: { bg: 'background' },
      _active: { '--slider-thumb-scale': '1' },
    },
    mark: {
      fontSize: 'xs',
      color: 'muted-foreground',
    },
  }),
  sizes: {
    sm: definePartsStyle({
      container: { [$thumbSize.variable]: '20px', [$trackSize.variable]: '8px' },
    }),
    md: definePartsStyle({
      container: { [$thumbSize.variable]: '20px', [$trackSize.variable]: '8px' },
    }),
    lg: definePartsStyle({
      container: { [$thumbSize.variable]: '20px', [$trackSize.variable]: '8px' },
    }),
  },
  defaultProps: { size: 'md' },
});

export default slider;
