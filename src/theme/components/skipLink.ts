import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import { cssVar } from '@chakra-ui/styled-system';

const $bg = cssVar('skip-link-bg');

const visible = {
  clip: 'auto',
  width: 'auto',
  height: 'auto',
  position: 'fixed',
  top: '16px',
  insetStart: '16px',
  [$bg.variable]: 'colors.background',
  _dark: {
    [$bg.variable]: 'colors.background',
  },
  bg: 'background',
  color: 'foreground',
  border: '1px solid',
  borderColor: 'border',
  borderRadius: 'none',
  px: '16px',
  py: '8px',
  padding: '8px 16px',
  fontSize: 'sm',
  fontWeight: 'normal',
  boxShadow: 'outline',
};

const skipLink = defineStyleConfig({
  baseStyle: defineStyle({
    borderRadius: 'none',
    fontWeight: 'normal',
    boxShadow: 'none',
    _focus: visible,
    _focusVisible: visible,
  }),
});

export default skipLink;
