import { avatarAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(avatarAnatomy.keys);

const avatarSizes = {
  '2xs': '16px',
  xs: '20px',
  sm: '32px',
  md: '40px',
  lg: '48px',
  xl: '64px',
  '2xl': '96px',
} as const;

const size = (px: string) =>
  definePartsStyle({
    container: {
      width: px,
      height: px,
      fontSize: `calc(${px} / 2.5)`,
    },
    excessLabel: {
      width: px,
      height: px,
      fontSize: `calc(${px} / 2.5)`,
    },
    label: {
      fontSize: `calc(${px} / 2.5)`,
    },
  });

const avatar = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    container: {
      bg: 'accent',
      color: 'muted-foreground',
      fontWeight: 'normal',
      textTransform: 'none',
      borderRadius: 'full',
      borderColor: 'background',
      '&:not([data-loaded])': {
        bg: 'accent',
        color: 'muted-foreground',
      },
    },
    excessLabel: {
      bg: 'accent',
      color: 'muted-foreground',
      fontWeight: 'normal',
      borderRadius: 'full',
      borderWidth: '2px',
      borderColor: 'background',
    },
    badge: {
      border: '2px solid',
      borderColor: 'background',
      bg: 'foreground',
    },
    group: {},
    label: {
      fontWeight: 'normal',
      color: 'muted-foreground',
    },
  }),
  sizes: {
    '2xs': size(avatarSizes['2xs']),
    xs: size(avatarSizes.xs),
    sm: size(avatarSizes.sm),
    md: size(avatarSizes.md),
    lg: size(avatarSizes.lg),
    xl: size(avatarSizes.xl),
    '2xl': size(avatarSizes['2xl']),
  },
  variants: {
    square: definePartsStyle({
      container: {
        borderRadius: 'none',
        '& img': { borderRadius: 'none' },
      },
      excessLabel: {
        borderRadius: 'none',
      },
    }),
  },
  defaultProps: {
    size: 'md',
  },
});

export default avatar;
