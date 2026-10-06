import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const mark = defineStyleConfig({
  baseStyle: defineStyle({
    bg: 'secondary',
    color: 'foreground',
    px: '2px',
    borderRadius: 'none',
    fontWeight: 'normal',
    whiteSpace: 'normal',
  }),
});

export default mark;
