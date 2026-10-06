import { popoverAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { cssVar } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(popoverAnatomy.keys);

const $arrowBg = cssVar('popper-arrow-bg');
const $arrowShadow = cssVar('popper-arrow-shadow-color');

const popover = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    popper: {
      zIndex: 'popover',
    },
    content: {
      width: '288px',
      bg: 'background',
      color: 'foreground',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border',
      borderRadius: 'none',
      boxShadow: 'overlay',
      [$arrowBg.variable]: 'colors.background',
      [$arrowShadow.variable]: 'colors.border',
      _focus: { boxShadow: 'overlay', outline: 'none' },
      _focusVisible: { boxShadow: 'overlay', outline: 'none' },
    },
    header: {
      pt: '12px',
      pb: '12px',
      pl: '16px',
      pr: '40px',
      fontFamily: 'body',
      fontSize: 'sm',
      fontWeight: 'normal',
      color: 'foreground',
      borderBottomWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border',
    },
    body: {
      p: '16px',
      fontFamily: 'body',
      fontSize: 'sm',
      fontWeight: 'normal',
      color: 'foreground',
    },
    footer: {
      px: '16px',
      py: '12px',
      borderTopWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border',
    },
    arrow: {
      bg: 'background',
      [$arrowBg.variable]: 'colors.background',
      [$arrowShadow.variable]: 'colors.border',
    },
    closeButton: {
      borderRadius: 'none',
      opacity: 0.7,
      _hover: { opacity: 1, bg: 'transparent' },
      _focusVisible: { boxShadow: 'outline' },
    },
  }),
});

export default popover;
