import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { cssVar } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  'stepper',
  'step',
  'title',
  'description',
  'indicator',
  'separator',
  'icon',
  'number',
]);

const $size = cssVar('stepper-indicator-size');
const $iconSize = cssVar('stepper-icon-size');
const $titleSize = cssVar('stepper-title-font-size');
const $descSize = cssVar('stepper-description-font-size');
const $accent = cssVar('stepper-accent-color');

const metrics = {
  [$size.variable]: '24px',
  [$iconSize.variable]: '16px',
  [$titleSize.variable]: 'fontSizes.sm',
  [$descSize.variable]: 'fontSizes.xs',
  [$accent.variable]: 'colors.primary',
};

const oneSize = definePartsStyle({
  stepper: {
    ...metrics,
    _dark: {
      [$accent.variable]: 'colors.primary',
    },
  },
});

const stepper = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    stepper: {
      ...metrics,
      display: 'flex',
      justifyContent: 'space-between',
      gap: '16px',
      borderRadius: 'none',
      boxShadow: 'none',
      '&[data-orientation=vertical]': {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      '&[data-orientation=horizontal]': {
        flexDirection: 'row',
        alignItems: 'center',
      },
      _dark: {
        [$accent.variable]: 'colors.primary',
      },
    },
    step: {
      flex: 1,
      flexShrink: 0,
      position: 'relative',
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
      '&[data-orientation=vertical]': {
        alignItems: 'flex-start',
      },
      '&:last-of-type:not([data-stretch])': {
        flex: 'initial',
      },
    },
    title: {
      fontFamily: 'body',
      fontSize: 'sm',
      fontWeight: 'normal',
      color: 'foreground',
      lineHeight: '1.2',
    },
    description: {
      fontFamily: 'body',
      fontSize: 'xs',
      fontWeight: 'normal',
      color: 'muted-foreground',
      lineHeight: '1.2',
    },
    indicator: {
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSize: $size.reference,
      w: $size.reference,
      h: $size.reference,
      borderRadius: 'none',
      boxShadow: 'none',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border',
      bg: 'background',
      color: 'muted-foreground',
      '&[data-status=complete]': {
        bg: 'primary',
        borderWidth: '1px',
        borderColor: 'primary',
        color: 'primary-foreground',
      },
      '&[data-status=active]': {
        bg: 'background',
        borderWidth: '1px',
        borderColor: 'primary',
        color: 'foreground',
      },
      '&[data-status=incomplete]': {
        bg: 'background',
        borderWidth: '1px',
        borderColor: 'border',
        color: 'muted-foreground',
      },
    },
    separator: {
      bg: 'border',
      flex: 1,
      borderRadius: 'none',
      boxShadow: 'none',
      '&[data-status=complete]': {
        bg: 'foreground',
      },
      '&[data-orientation=horizontal]': {
        w: '100%',
        h: '1px',
        marginStart: '8px',
      },
      '&[data-orientation=vertical]': {
        w: '1px',
        h: '100%',
        position: 'absolute',
        maxH: `calc(100% - ${$size.reference} - 8px)`,
        top: `calc(${$size.reference} + 4px)`,
        insetStart: `calc(${$size.reference} / 2 - 0.5px)`,
      },
    },
    icon: {
      flexShrink: 0,
      w: $iconSize.reference,
      h: $iconSize.reference,
      color: 'primary-foreground',
    },
    number: {
      fontFamily: 'body',
      fontSize: 'xs',
      fontWeight: 'normal',
      lineHeight: '1',
    },
  }),
  sizes: {
    xs: oneSize,
    sm: oneSize,
    md: oneSize,
    lg: oneSize,
  },
  defaultProps: {
    size: 'md',
  },
});

export default stepper;
