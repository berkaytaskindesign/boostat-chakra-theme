import { defineStyleConfig } from '@chakra-ui/react';

const variant = (name: string) => ({ textStyle: name });

const text = defineStyleConfig({
  variants: {
    body: variant('body'),
    'body-lg': variant('body-lg'),
    caption: variant('caption'),
    label: variant('label'),
    muted: variant('muted'),
  },
});

export default text;
