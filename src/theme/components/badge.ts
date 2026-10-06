import type { ComponentStyleConfig } from '@chakra-ui/react';

const flat = (bg: string, color: string) => ({
  bg,
  color,
  border: 'none',
  boxShadow: 'none',
});

const badge: ComponentStyleConfig = {
  baseStyle: {
    display: 'inline-flex',
    alignItems: 'center',
    px: '8px',
    h: '20px',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    textTransform: 'none',
    fontWeight: 'normal',
    fontSize: 'xs',
    borderRadius: 'none',
    bg: 'accent',
    color: 'muted-foreground',
    border: 'none',
    boxShadow: 'none',
  },
  variants: {
    subtle: flat('accent', 'muted-foreground'),
    solid: flat('accent', 'muted-foreground'),
    outline: {
      bg: 'transparent',
      color: 'foreground',
      border: '1px solid',
      borderColor: 'border',
      boxShadow: 'none',
    },
    destructive: flat('destructive', 'destructive-foreground'),
  },
  defaultProps: {
    variant: 'subtle',
  },
};

export default badge;
