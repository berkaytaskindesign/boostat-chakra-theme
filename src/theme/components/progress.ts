import { progressAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(progressAnatomy.keys);

const stripe =
  'color-mix(in srgb, var(--chakra-colors-primary-foreground) 15%, transparent)';

const stripeImage = `linear-gradient(45deg, ${stripe} 25%, transparent 25%, transparent 50%, ${stripe} 50%, ${stripe} 75%, transparent 75%, transparent)`;

const filled = (props: StyleFunctionProps) => {
  const striped = Boolean(props.hasStripe) && !props.isIndeterminate;
  return {
    backgroundColor: 'primary',
    bgColor: 'primary',
    backgroundImage: striped ? stripeImage : 'none',
    bgImage: striped ? stripeImage : 'none',
    backgroundSize: striped ? '1rem 1rem' : 'auto',
    borderRadius: 'none',
    boxShadow: 'none',
  };
};

const track = {
  bg: 'secondary',
  borderRadius: 'none',
  boxShadow: 'none',
};

const height = (h: string) =>
  definePartsStyle({
    track: { ...track, h },
    filledTrack: { borderRadius: 'none' },
  });

const progress = defineMultiStyleConfig({
  baseStyle: definePartsStyle((props) => ({
    label: {
      fontSize: 'xs',
      fontWeight: 'normal',
      lineHeight: '1',
      color: 'foreground',
    },
    track,
    filledTrack: filled(props),
  })),
  sizes: {
    xs: height('4px'),
    sm: height('8px'),
    md: height('16px'),
    lg: height('24px'),
  },
  defaultProps: {
    size: 'md',
  },
});

export default progress;
