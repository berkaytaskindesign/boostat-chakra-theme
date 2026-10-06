import { modalAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(modalAnatomy.keys);

const dialogShell = {
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  bg: 'background',
  color: 'foreground',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'border',
  borderRadius: 'none',
  boxShadow: 'none',
  width: '90vw',
  my: 0,
  mx: 'auto',
  maxH: 'calc(100svh - 10vw)',
};

const section = {
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
};

const size = (maxW: string) =>
  definePartsStyle({
    dialog: {
      maxW,
      borderRadius: 'none',
      boxShadow: 'none',
    },
  });

const modal = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    overlay: {
      bg: 'overlay-scrim',
    },
    dialogContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    dialog: dialogShell,
    ...section,
  }),
  sizes: {
    sm: size('512px'),
    md: size('576px'),
    lg: size('720px'),
    xl: size('900px'),
    full: definePartsStyle({
      dialog: {
        width: '100vw',
        maxW: '100vw',
        height: '100svh',
        maxH: '100svh',
        margin: 0,
        mx: 0,
        my: 0,
        borderWidth: 0,
        borderRadius: 'none',
        boxShadow: 'none',
      },
    }),
  },
  defaultProps: {
    size: 'md',
  },
});

export default modal;
