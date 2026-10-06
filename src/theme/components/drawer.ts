import { modalAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(modalAnatomy.keys);

const size = (maxW: string, flush = false) =>
  definePartsStyle({
    dialog: flush
      ? {
          maxW: '100vw',
          width: '100vw',
          margin: 0,
          height: '100%',
          maxH: '100%',
          borderRadius: 'none',
          boxShadow: 'none',
        }
      : {
          maxW,
          borderRadius: 'none',
          boxShadow: 'none',
        },
  });

const horizontal = {
  margin: { base: 0, md: '16px' },
  height: { base: '100%', md: 'calc(100% - 32px)' },
  maxH: { base: '100%', md: 'calc(100% - 32px)' },
  borderRadius: 'none',
  boxShadow: 'none',
};

const vertical = {
  margin: { base: 0, md: '16px' },
  height: 'auto',
  maxH: { base: '100%', md: 'calc(100% - 32px)' },
  width: { base: '100%', md: 'calc(100% - 32px)' },
  maxW: { base: '100%', md: 'calc(100% - 32px)' },
  borderRadius: 'none',
  boxShadow: 'none',
};

const flush = {
  maxW: '100vw',
  width: '100vw',
  margin: 0,
  height: '100%',
  maxH: '100%',
  borderRadius: 'none',
  boxShadow: 'none',
};

const geometry = definePartsStyle((props) => {
  const placement = String(props.variant ?? 'right');
  const sheet =
    props.size === 'full' ? flush : placement === 'top' || placement === 'bottom' ? vertical : horizontal;
  return { dialog: sheet };
});

const drawer = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    overlay: {
      bg: 'overlay-scrim',
    },
    dialogContainer: {
      display: 'flex',
    },
    dialog: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      p: 0,
      bg: 'sheet',
      color: 'foreground',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border',
      borderRadius: 'none',
      boxShadow: 'none',
    },
    header: {
      flexShrink: 0,
      pt: '24px',
      pb: 0,
      pl: '24px',
      pr: '56px',
      fontFamily: 'body',
      fontSize: 'lg',
      fontWeight: 'normal',
      lineHeight: '1.2',
      color: 'foreground',
    },
    body: {
      flex: '1',
      minH: 0,
      overflowY: 'auto',
      px: '24px',
      py: '16px',
      fontFamily: 'body',
      fontSize: 'sm',
      fontWeight: 'normal',
      color: 'foreground',
    },
    footer: {
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: '8px',
      p: '24px',
    },
    closeButton: {
      position: 'absolute',
      top: '24px',
      insetEnd: '24px',
      borderRadius: 'none',
      opacity: 0.7,
      bg: 'transparent',
      _hover: { opacity: 1, bg: 'transparent' },
      _active: { opacity: 1, bg: 'transparent' },
      _focusVisible: { boxShadow: 'outline', bg: 'transparent' },
    },
  }),
  sizes: {
    sm: size('384px'),
    md: size('520px'),
    lg: size('640px'),
    full: size('100vw', true),
  },
  variants: {
    left: geometry,
    right: geometry,
    start: geometry,
    end: geometry,
    top: geometry,
    bottom: geometry,
  },
  defaultProps: {
    size: 'md',
    variant: 'right',
  },
});

export default drawer;
