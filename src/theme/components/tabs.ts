import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { cssVar } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tabsAnatomy.keys);

const $fg = cssVar('tabs-color');
const $bg = cssVar('tabs-bg');
const $border = cssVar('tabs-border-color');

const quiet = {
  [$fg.variable]: 'colors.muted-foreground',
  [$bg.variable]: 'transparent',
  [$border.variable]: 'colors.border',
  color: 'muted-foreground',
  bg: 'transparent',
  fontFamily: 'body',
  fontSize: 'sm',
  fontWeight: 'normal',
  borderRadius: 'none',
  boxShadow: 'none',
  _dark: {
    [$fg.variable]: 'colors.muted-foreground',
    [$bg.variable]: 'transparent',
  },
};

const selectedInk = {
  [$fg.variable]: 'colors.foreground',
  [$bg.variable]: 'colors.background',
  color: 'foreground',
  _dark: {
    [$fg.variable]: 'colors.foreground',
    [$bg.variable]: 'colors.background',
  },
};

const noHoverFill = {
  _hover: {
    bg: 'transparent',
  },
  _active: {
    bg: 'transparent',
    [$bg.variable]: 'transparent',
  },
};

const size = definePartsStyle({
  tab: {
    h: 'auto',
    py: 0,
    px: '12px',
    fontSize: 'sm',
    fontWeight: 'normal',
    borderRadius: 'none',
  },
});

const segmented = definePartsStyle((props) => {
  const vertical = props.orientation === 'vertical';
  const fitted = Boolean(props.isFitted);

  return {
    tablist: {
      display: fitted || vertical ? 'flex' : 'inline-flex',
      flexDirection: vertical ? 'column' : 'row',
      alignItems: vertical ? 'stretch' : 'center',
      justifyContent: 'flex-start',
      bg: 'accent',
      p: '4px',
      h: vertical ? 'auto' : '40px',
      w: fitted || vertical ? '100%' : 'auto',
      borderWidth: 0,
      borderRadius: 'none',
      boxShadow: 'none',
    },
    tab: {
      ...quiet,
      display: 'flex',
      alignItems: 'center',
      justifyContent: vertical ? 'flex-start' : 'center',
      textAlign: vertical ? 'start' : 'center',
      h: '32px',
      w: vertical ? '100%' : 'auto',
      px: '12px',
      borderWidth: 0,
      ...noHoverFill,
      _selected: {
        ...selectedInk,
        bg: 'background',
        borderWidth: 0,
        boxShadow: 'none',
      },
      _hover: {
        bg: 'transparent',
        _selected: { bg: 'background' },
      },
      _active: {
        bg: 'transparent',
        _selected: { bg: 'background' },
      },
    },
  };
});

const line = definePartsStyle((props) => {
  const vertical = props.orientation === 'vertical';

  return {
    tablist: {
      bg: 'transparent',
      borderRadius: 'none',
      boxShadow: 'none',
      borderStyle: 'solid',
      borderColor: 'border',
      borderBottomWidth: vertical ? 0 : '1px',
      borderInlineStartWidth: vertical ? '1px' : 0,
    },
    tab: {
      ...quiet,
      h: '40px',
      px: '12px',
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderBottomWidth: vertical ? 0 : '1px',
      borderInlineStartWidth: vertical ? '1px' : 0,
      mb: vertical ? 0 : '-1px',
      marginInlineStart: vertical ? '-1px' : 0,
      ...noHoverFill,
      _selected: {
        ...selectedInk,
        bg: 'transparent',
        borderColor: 'foreground',
        borderBottomColor: vertical ? 'transparent' : 'foreground',
        borderInlineStartColor: vertical ? 'foreground' : 'transparent',
      },
    },
  };
});

const enclosed = (filled: boolean) =>
  definePartsStyle({
    tablist: {
      bg: 'transparent',
      borderRadius: 'none',
      boxShadow: 'none',
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'border',
      mb: '-1px',
    },
    tab: {
      ...quiet,
      h: '40px',
      px: '12px',
      bg: filled ? 'accent' : 'transparent',
      [$bg.variable]: filled ? 'colors.accent' : 'transparent',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderTopRadius: 'none',
      borderBottomRadius: 'none',
      mb: '-1px',
      ...noHoverFill,
      _selected: {
        ...selectedInk,
        bg: 'background',
        borderColor: 'border',
        borderBottomColor: 'background',
        [$border.variable]: 'colors.background',
        boxShadow: 'none',
      },
      _hover: {
        bg: filled ? 'accent' : 'transparent',
        _selected: { bg: 'background' },
      },
      _active: {
        bg: filled ? 'accent' : 'transparent',
        _selected: { bg: 'background' },
      },
    },
  });

const tabs = defineMultiStyleConfig({
  baseStyle: definePartsStyle((props) => ({
    root: {
      display: props.orientation === 'vertical' ? 'flex' : 'block',
      borderRadius: 'none',
      boxShadow: 'none',
    },
    tab: {
      flex: props.isFitted ? 1 : 'none',
      borderRadius: 'none',
      boxShadow: 'none',
      fontWeight: 'normal',
      _focusVisible: {
        zIndex: 1,
        boxShadow: 'outline',
      },
      _disabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
        boxShadow: 'none',
      },
    },
    tablist: {
      borderRadius: 'none',
      boxShadow: 'none',
    },
    tabpanel: {
      pt: '16px',
      px: 0,
      pb: 0,
      borderRadius: 'none',
      boxShadow: 'none',
      color: 'foreground',
      fontSize: 'sm',
    },
    tabpanels: {
      borderRadius: 'none',
      boxShadow: 'none',
    },
    indicator: {
      bg: 'transparent',
      borderRadius: 'none',
      boxShadow: 'none',
    },
  })),
  sizes: {
    sm: size,
    md: size,
    lg: size,
  },
  variants: {
    segmented,
    line,
    enclosed: enclosed(false),
    'enclosed-colored': enclosed(true),
    'soft-rounded': segmented,
    'solid-rounded': segmented,
  },
  defaultProps: {
    size: 'md',
    variant: 'segmented',
  },
});

export default tabs;
