import { accordionAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(accordionAnatomy.keys);

const accordion = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    root: {
      border: 'none',
      boxShadow: 'none',
    },
    container: {
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border',
      boxShadow: 'none',
    },
    button: {
      py: '16px',
      px: 0,
      fontFamily: 'body',
      fontSize: 'sm',
      fontWeight: 'normal',
      textAlign: 'start',
      color: 'foreground',
      bg: 'transparent',
      boxShadow: 'none',
      justifyContent: 'space-between',
      _hover: {
        bg: 'transparent',
      },
      _focusVisible: {
        boxShadow: 'outline',
      },
      _disabled: {
        opacity: 0.5,
        bg: 'transparent',
        cursor: 'not-allowed',
      },
    },
    panel: {
      pt: 0,
      pb: '16px',
      px: 0,
      fontFamily: 'body',
      fontSize: 'sm',
      fontWeight: 'normal',
      color: 'foreground',
    },
    icon: {
      boxSize: '16px',
      w: '16px',
      h: '16px',
      fontSize: '16px',
      color: 'foreground',
      opacity: 1,
      transitionProperty: 'transform',
      transitionDuration: '200ms',
    },
  }),
});

export default accordion;
