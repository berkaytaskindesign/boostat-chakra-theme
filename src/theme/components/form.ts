import { formAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(formAnatomy.keys);

const form = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    requiredIndicator: {
      color: 'foreground',
      ml: '4px',
    },
    helperText: {
      fontSize: '13px',
      color: 'muted-foreground',
      mt: '8px',
    },
  }),
});

export default form;
