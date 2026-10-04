import { formErrorAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  formErrorAnatomy.keys,
);

const formError = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    text: {
      fontSize: '13px',
      color: 'destructive',
      mt: '8px',
    },
    icon: {
      color: 'destructive',
    },
  }),
});

export default formError;
