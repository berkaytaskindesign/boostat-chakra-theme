import { editableAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

import { fieldBase, fieldVariants } from './field';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(editableAnatomy.keys);

const shared = {
  fontSize: 'inherit',
  fontWeight: 'normal',
  lineHeight: 'inherit',
  px: '8px',
  py: '4px',
  borderRadius: 'none',
  width: '100%',
  height: 'auto',
};

const field = {
  ...fieldBase,
  ...fieldVariants.outline,
  ...shared,
  _placeholder: { color: 'muted-foreground', opacity: 1 },
  _focusVisible: {
    borderColor: 'focus-border',
    boxShadow: 'none',
  },
};

const editable = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    preview: {
      ...shared,
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'transparent',
      bg: 'transparent',
      cursor: 'text',
      _hover: { bg: 'accent', borderColor: 'transparent' },
      transitionProperty: 'background-color',
      transitionDuration: '150ms',
    },
    input: field,
    textarea: field,
  }),
});

export default editable;
