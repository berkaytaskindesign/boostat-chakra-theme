import { breadcrumbAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { cssVar } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  breadcrumbAnatomy.keys,
);

const $decor = cssVar('breadcrumb-link-decor');

const breadcrumb = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    container: {
      color: 'muted-foreground',
      fontFamily: 'body',
      fontSize: 'sm',
      fontWeight: 'normal',
    },
    item: {
      display: 'inline-flex',
      alignItems: 'center',
    },
    separator: {
      color: 'muted-foreground',
      mx: '8px',
      display: 'inline-flex',
      alignItems: 'center',
    },
    link: {
      fontFamily: 'body',
      fontSize: 'sm',
      fontWeight: 'normal',
      color: 'muted-foreground',
      textDecoration: 'none',
      textUnderlineOffset: '4px',
      borderRadius: 'none',
      boxShadow: 'none',
      outline: 'none',
      [$decor.variable]: 'none',
      '&:not([aria-current=page])': {
        cursor: 'pointer',
        _hover: {
          color: 'foreground',
          textDecoration: 'underline',
          textDecorationThickness: '1px',
          textUnderlineOffset: '4px',
          [$decor.variable]: 'underline',
        },
        _focusVisible: {
          boxShadow: 'outline',
        },
      },
      '&[aria-current=page]': {
        color: 'foreground',
        textDecoration: 'none',
        cursor: 'default',
        [$decor.variable]: 'none',
      },
    },
  }),
});

export default breadcrumb;
