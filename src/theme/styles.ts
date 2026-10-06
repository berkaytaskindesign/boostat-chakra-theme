const shimmer =
  'linear-gradient(90deg, transparent, color-mix(in srgb, var(--chakra-colors-primary) 10%, transparent), transparent)';

const styles = {
  global: {
    body: {
      bg: 'background',
      color: 'foreground',
      fontSize: 'sm',
      lineHeight: '1.5',
    },
    '.chakra-stat__group': {
      gap: '24px',
      justifyContent: 'flex-start',
    },
    '@keyframes skeleton-shimmer': {
      '0%': { backgroundPosition: '200% 0' },
      '100%': { backgroundPosition: '-200% 0' },
    },
    '.chakra-skeleton:not([data-loaded])': {
      backgroundColor: 'var(--chakra-colors-accent)',
      backgroundImage: shimmer,
      backgroundSize: '200% 100%',
      animation: 'skeleton-shimmer 1.5s linear infinite',
    },
    '@media (prefers-reduced-motion: reduce)': {
      '.chakra-skeleton:not([data-loaded])': {
        animation: 'none',
      },
    },
  },
};

export default styles;
