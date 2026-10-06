import { listAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(listAnatomy.keys);

const list = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    container: {
      listStylePosition: 'outside',
      color: 'foreground',
      fontWeight: 'normal',
      '& > *:not(style) ~ *:not(style)': { mt: '8px' },
    },
    item: {
      color: 'foreground',
      fontWeight: 'normal',
      '&::marker': { color: 'muted-foreground' },
    },
    icon: {
      color: 'muted-foreground',
      boxSize: '16px',
      w: '16px',
      h: '16px',
      marginEnd: '8px',
      display: 'inline',
      verticalAlign: 'text-bottom',
    },
  }),
});

export default list;
