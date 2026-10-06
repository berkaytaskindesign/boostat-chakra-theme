import { tableAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tableAnatomy.keys);

const numeric = {
  '&[data-is-numeric=true]': {
    textAlign: 'end',
    fontFamily: 'numeric',
  },
};

const headerText = {
  fontFamily: 'body',
  fontSize: 'xs',
  fontWeight: 'normal',
  lineHeight: '1',
  letterSpacing: 'normal',
  textTransform: 'none',
  textAlign: 'start',
  color: 'muted-foreground',
  ...numeric,
};

const bodyText = {
  fontFamily: 'body',
  fontSize: 'sm',
  fontWeight: 'normal',
  lineHeight: '1',
  textAlign: 'start',
  color: 'foreground',
  ...numeric,
};

const gridEdges = {
  borderStyle: 'solid',
  borderColor: 'border',
  borderBottomWidth: '1px',
  borderRightWidth: '1px',
  '&:last-child': {
    borderRightWidth: 0,
  },
};

const rowLine = {
  borderStyle: 'solid',
  borderColor: 'border',
  borderBottomWidth: '1px',
  borderRightWidth: 0,
  borderLeftWidth: 0,
  borderTopWidth: 0,
};

const lastBodyRow = {
  '&:last-of-type': {
    th: { borderBottomWidth: 0 },
    td: { borderBottomWidth: 0 },
  },
};

const caption = {
  captionSide: 'bottom',
  mt: '16px',
  px: 0,
  py: 0,
  fontFamily: 'body',
  fontSize: 'sm',
  fontWeight: 'normal',
  textAlign: 'start',
  color: 'muted-foreground',
};

const footerCells = {
  ...headerText,
  borderTopWidth: '1px',
  borderBottomWidth: 0,
  borderStyle: 'solid',
  borderColor: 'border',
};

const grid = definePartsStyle({
  table: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'border',
    boxShadow: 'none',
  },
  th: { ...headerText, ...gridEdges },
  td: { ...bodyText, ...gridEdges },
  tbody: { tr: lastBodyRow },
  tfoot: {
    th: footerCells,
    td: footerCells,
  },
  caption,
});

const table = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    table: {
      fontVariantNumeric: 'normal',
      borderCollapse: 'collapse',
      width: 'full',
      boxShadow: 'none',
    },
    thead: {},
    tbody: {},
    tr: {},
    th: headerText,
    td: bodyText,
    tfoot: {},
    caption,
  }),
  sizes: {
    sm: definePartsStyle({
      th: { h: '36px', px: '12px', py: 0, fontSize: 'xs', lineHeight: '1' },
      td: { h: '36px', px: '12px', py: 0, fontSize: 'sm', lineHeight: '1' },
      caption: { fontSize: 'sm', mt: '16px' },
    }),
    md: definePartsStyle({
      th: { h: '48px', px: '16px', py: 0, fontSize: 'xs', lineHeight: '1' },
      td: { h: '45px', px: '16px', py: 0, fontSize: 'sm', lineHeight: '1' },
      caption: { fontSize: 'sm', mt: '16px' },
    }),
    lg: definePartsStyle({
      th: { h: '56px', px: '16px', py: 0, fontSize: 'xs', lineHeight: '1' },
      td: { h: '56px', px: '16px', py: 0, fontSize: 'sm', lineHeight: '1' },
      caption: { fontSize: 'sm', mt: '16px' },
    }),
  },
  variants: {
    simple: grid,
    minimal: definePartsStyle({
      table: {
        borderWidth: 0,
        boxShadow: 'none',
      },
      th: { ...headerText, ...rowLine },
      td: { ...bodyText, ...rowLine },
      tfoot: {
        th: footerCells,
        td: footerCells,
      },
      caption,
    }),
    striped: definePartsStyle({
      table: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'border',
        boxShadow: 'none',
      },
      th: { ...headerText, ...gridEdges },
      td: { ...bodyText, ...gridEdges },
      tbody: {
        tr: {
          '&:nth-of-type(odd)': {
            bg: 'accent',
            th: { bg: 'accent', borderColor: 'border' },
            td: { bg: 'accent', borderColor: 'border' },
          },
          '&:nth-of-type(even)': {
            bg: 'transparent',
            th: { bg: 'transparent' },
            td: { bg: 'transparent' },
          },
          ...lastBodyRow,
        },
      },
      tfoot: {
        th: footerCells,
        td: footerCells,
      },
      caption,
    }),
    interactive: definePartsStyle({
      table: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'border',
        boxShadow: 'none',
      },
      th: { ...headerText, ...gridEdges },
      td: { ...bodyText, ...gridEdges },
      tbody: {
        tr: {
          cursor: 'pointer',
          _hover: {
            bg: 'accent',
            th: { bg: 'accent' },
            td: { bg: 'accent' },
          },
          ...lastBodyRow,
        },
      },
      tfoot: {
        th: footerCells,
        td: footerCells,
      },
      caption,
    }),
    unstyled: definePartsStyle({
      table: {
        borderWidth: 0,
        boxShadow: 'none',
      },
      th: {
        borderWidth: 0,
        boxShadow: 'none',
      },
      td: {
        borderWidth: 0,
        boxShadow: 'none',
      },
    }),
  },
  defaultProps: {
    variant: 'simple',
    size: 'md',
  },
});

export default table;
