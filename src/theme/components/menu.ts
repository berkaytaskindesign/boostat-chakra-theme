import { menuAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(menuAnatomy.keys);

const itemState = {
  bg: 'accent',
  color: 'accent-foreground',
};

const menu = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    button: {},
    list: {
      bg: 'background',
      color: 'foreground',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border',
      borderRadius: 'none',
      boxShadow: 'overlay',
      p: '4px',
      minW: '128px',
      zIndex: 'dropdown',
    },
    item: {
      px: '8px',
      py: '6px',
      fontFamily: 'body',
      fontSize: 'sm',
      fontWeight: 'normal',
      color: 'foreground',
      bg: 'transparent',
      borderRadius: 'none',
      _hover: itemState,
      _focus: itemState,
      _active: itemState,
      _expanded: itemState,
      _disabled: {
        opacity: 0.5,
        bg: 'transparent',
        cursor: 'not-allowed',
      },
    },
    groupTitle: {
      mx: '8px',
      my: '6px',
      fontFamily: 'body',
      fontSize: 'xs',
      fontWeight: 'normal',
      color: 'muted-foreground',
    },
    icon: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      boxSize: '16px',
      color: 'foreground',
      '& .chakra-menu__icon': {
        w: '16px',
        h: '16px',
      },
    },
    command: {
      fontFamily: 'body',
      fontSize: 'xs',
      fontWeight: 'normal',
      color: 'muted-foreground',
      opacity: 1,
    },
    divider: {
      border: 0,
      borderBottomWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border',
      opacity: 1,
      my: '4px',
    },
  }),
});

export default menu;
