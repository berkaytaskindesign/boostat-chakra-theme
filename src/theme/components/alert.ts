import { alertAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { cssVar, type StyleFunctionProps } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(alertAnatomy.keys);

const $fg = cssVar('alert-fg');
const $bg = cssVar('alert-bg');

const statusOf = (props: StyleFunctionProps) => (props.status as string | undefined) ?? 'info';

const ink = (status: string) => (status === 'error' ? 'destructive-text' : 'foreground');

const icon = (color: string) => ({
  color,
  flexShrink: 0,
  marginEnd: '12px',
  w: '16px',
  h: '16px',
});

const text = (color: string, fontSize: string) => ({
  color,
  fontSize,
  fontWeight: 'normal',
  lineHeight: 'short',
  marginEnd: '0',
});

const vars = (fg: string, bg: string) => ({
  [$fg.variable]: fg,
  [$bg.variable]: bg,
  _dark: {
    [$fg.variable]: fg,
    [$bg.variable]: bg,
  },
});

const subtle = definePartsStyle((props) => {
  const status = statusOf(props);
  const color = ink(status);
  const borderColor = status === 'error' ? 'destructive' : 'border';
  return {
    container: {
      ...vars(status === 'error' ? 'colors.destructive-text' : 'colors.foreground', 'colors.background'),
      bg: 'background',
      color,
      borderStyle: 'solid',
      borderTopColor: borderColor,
      borderBottomColor: borderColor,
      borderInlineStartColor: borderColor,
      borderInlineEndColor: borderColor,
      borderStartColor: borderColor,
      borderEndColor: borderColor,
      borderTopWidth: '1px',
      borderBottomWidth: '1px',
      borderInlineStartWidth: '1px',
      borderInlineEndWidth: '1px',
      borderStartWidth: '1px',
      borderEndWidth: '1px',
      borderRadius: 'none',
      boxShadow: 'none',
      p: '16px',
      paddingTop: '16px',
      paddingBottom: '16px',
      paddingStart: '16px',
      paddingEnd: '16px',
      fontSize: 'sm',
      alignItems: 'flex-start',
    },
    title: text(color, 'sm'),
    description: text(color, 'sm'),
    icon: icon(color),
    spinner: icon(color),
  };
});

const accentEdge = (status: string, edge: 'start' | 'top') => {
  const color = status === 'error' ? 'destructive' : 'foreground';
  if (edge === 'start') {
    return {
      borderStartWidth: '2px',
      borderInlineStartWidth: '2px',
      borderStartColor: color,
      borderInlineStartColor: color,
    };
  }
  return {
    borderTopWidth: '2px',
    borderTopColor: color,
  };
};

const solid = definePartsStyle((props) => {
  const error = statusOf(props) === 'error';
  const bg = error ? 'destructive' : 'primary';
  const color = error ? 'destructive-foreground' : 'primary-foreground';
  return {
    container: {
      ...vars(
        error ? 'colors.destructive-foreground' : 'colors.primary-foreground',
        error ? 'colors.destructive' : 'colors.primary',
      ),
      bg,
      color,
      borderWidth: '0',
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderRadius: 'none',
      boxShadow: 'none',
      p: '16px',
      paddingTop: '16px',
      paddingStart: '16px',
      fontSize: 'sm',
      alignItems: 'flex-start',
    },
    title: text(color, 'sm'),
    description: text(color, 'sm'),
    icon: icon(color),
    spinner: icon(color),
  };
});

const toast = definePartsStyle((props) => {
  const error = statusOf(props) === 'error';
  const color = error ? 'destructive-text' : 'foreground';
  return {
    container: {
      ...vars(error ? 'colors.destructive-text' : 'colors.foreground', 'colors.card'),
      bg: 'card',
      color,
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: error ? 'destructive' : 'border',
      borderRadius: 'none',
      boxShadow: 'overlay',
      p: '20px',
      paddingTop: '20px',
      paddingStart: '20px',
      paddingEnd: '20px',
      fontSize: 'sm',
      alignItems: 'flex-start',
      maxW: '420px',
    },
    title: text(color, 'sm'),
    description: text(error ? 'destructive-text' : 'muted-foreground', 'xs'),
    icon: icon(color),
    spinner: icon(color),
  };
});

const alert = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    container: {
      ...vars('colors.foreground', 'colors.background'),
      bg: 'background',
      color: 'foreground',
      borderRadius: 'none',
      boxShadow: 'none',
      alignItems: 'flex-start',
    },
    title: text('foreground', 'sm'),
    description: text('foreground', 'sm'),
    icon: icon('foreground'),
    spinner: icon('foreground'),
  }),
  variants: {
    subtle,
    solid,
    'left-accent': definePartsStyle((props) => {
      const parts = subtle(props);
      return {
        ...parts,
        container: { ...parts.container, ...accentEdge(statusOf(props), 'start') },
      };
    }),
    'top-accent': definePartsStyle((props) => {
      const parts = subtle(props);
      return {
        ...parts,
        container: { ...parts.container, ...accentEdge(statusOf(props), 'top') },
      };
    }),
    toast,
  },
  defaultProps: {
    variant: 'subtle',
  },
});

export default alert;
