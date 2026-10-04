import type { ComponentStyleConfig } from '@chakra-ui/react';

const mix = (token: string, percent: number) =>
  `color-mix(in srgb, var(--chakra-colors-${token}) ${percent}%, transparent)`;

const filled = (token: string, color: string) => ({
  bg: token,
  color,
  _hover: {
    bg: mix(token, 90),
    _disabled: { bg: token },
  },
  _active: {
    bg: mix(token, 80),
    _disabled: { bg: token },
  },
});

const button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 'medium',
    borderRadius: 'none',
    whiteSpace: 'nowrap',
    transitionProperty: 'background-color, color, border-color',
    transitionDuration: '150ms',
    _focusVisible: {
      boxShadow: 'outline',
    },
    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
  sizes: {
    xs: {
      h: '32px',
      minW: '32px',
      fontSize: 'xs',
      px: '12px',
    },
    sm: {
      h: '32px',
      minW: '32px',
      fontSize: 'xs',
      px: '12px',
    },
    md: {
      h: '36px',
      minW: '36px',
      fontSize: 'sm',
      px: '16px',
    },
    lg: {
      h: '40px',
      minW: '40px',
      fontSize: 'sm',
      px: '32px',
    },
    xl: {
      h: '44px',
      minW: '44px',
      fontSize: 'sm',
      px: '24px',
    },
  },
  variants: {
    solid: filled('primary', 'primary-foreground'),
    secondary: filled('secondary', 'secondary-foreground'),
    destructive: filled('destructive', 'destructive-foreground'),
    outline: {
      border: '1px solid',
      borderColor: 'border',
      bg: 'transparent',
      color: 'foreground',
      _hover: {
        bg: 'accent',
        color: 'accent-foreground',
        _disabled: { bg: 'transparent', color: 'foreground' },
      },
      _active: {
        bg: 'muted',
        color: 'foreground',
        _disabled: { bg: 'transparent', color: 'foreground' },
      },
    },
    ghost: {
      bg: 'transparent',
      color: 'foreground',
      _hover: {
        bg: 'accent',
        color: 'accent-foreground',
        _disabled: { bg: 'transparent', color: 'foreground' },
      },
      _active: {
        bg: 'muted',
        color: 'foreground',
        _disabled: { bg: 'transparent', color: 'foreground' },
      },
    },
    link: {
      color: 'primary',
      height: 'auto',
      minW: 'auto',
      px: 0,
      py: 0,
      _hover: {
        textDecoration: 'underline',
        textUnderlineOffset: '4px',
        _disabled: { textDecoration: 'none' },
      },
      _active: {
        color: 'primary',
        _disabled: { color: 'primary' },
      },
    },
  },
  defaultProps: {
    variant: 'solid',
    size: 'md',
    iconSpacing: '8px',
  },
};

export default button;
