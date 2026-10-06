import { statAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(statAnatomy.keys);

const label = {
  fontFamily: 'body',
  fontSize: 'xs',
  fontWeight: 'normal',
  color: 'muted-foreground',
  opacity: 1,
};

const stat = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    container: {},
    label,
    helpText: {
      ...label,
      mb: 0,
    },
    number: {
      fontFamily: 'serif',
      fontWeight: 'normal',
      color: 'foreground',
      verticalAlign: 'baseline',
      lineHeight: '1',
    },
    icon: {
      color: 'foreground',
      boxSize: 'icon-sm',
      w: 'icon-sm',
      h: 'icon-sm',
      marginEnd: '4px',
      verticalAlign: 'middle',
    },
  }),
  sizes: {
    sm: definePartsStyle({
      label: { fontSize: 'xs' },
      helpText: { fontSize: 'xs' },
      number: { fontSize: '20px' },
    }),
    md: definePartsStyle({
      label: { fontSize: 'xs' },
      helpText: { fontSize: 'xs' },
      number: { fontSize: '24px' },
    }),
    lg: definePartsStyle({
      label: { fontSize: 'xs' },
      helpText: { fontSize: 'xs' },
      number: { fontSize: '36px' },
    }),
  },
  defaultProps: {
    size: 'md',
  },
});

export default stat;
