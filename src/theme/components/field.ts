import type { SystemStyleObject } from '@chakra-ui/react';

const autofill: SystemStyleObject = {
  '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active': {
    bg: 'transparent',
    backgroundImage: 'none',
    boxShadow: 'none',
    WebkitTextFillColor: 'var(--chakra-colors-foreground)',
  },
};

export const fieldBase: SystemStyleObject = {
  width: '100%',
  color: 'foreground',
  borderRadius: 'none',
  outline: 0,
  _placeholder: { color: 'muted-foreground' },
  transitionProperty: 'border-color',
  transitionDuration: '150ms',
  _disabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  ...autofill,
};

const restBorder = { borderColor: 'border', boxShadow: 'none' };
const filledRest = { bg: 'muted', borderColor: 'transparent', boxShadow: 'none' };
const focusStroke = { borderColor: 'focus-border', boxShadow: 'none' };

export const fieldVariants = {
  outline: {
    border: '1px solid',
    borderColor: 'border',
    bg: 'transparent',
    _hover: { borderColor: 'border' },
    _focusVisible: focusStroke,
    _invalid: restBorder,
    _readOnly: { boxShadow: 'none', _focusVisible: restBorder },
    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
      _hover: { borderColor: 'border' },
      _focusVisible: restBorder,
    },
  },
  filled: {
    border: '1px solid',
    borderColor: 'transparent',
    bg: 'muted',
    _hover: { bg: 'muted', borderColor: 'transparent' },
    _focusVisible: { ...filledRest, ...focusStroke },
    _invalid: filledRest,
    _readOnly: { boxShadow: 'none', _focusVisible: filledRest },
    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
      _hover: { bg: 'muted', borderColor: 'transparent' },
      _focusVisible: filledRest,
    },
  },
  flushed: {
    borderBottom: '1px solid',
    borderColor: 'border',
    borderRadius: 'none',
    px: 0,
    bg: 'transparent',
    _hover: { borderColor: 'border' },
    _focusVisible: focusStroke,
    _invalid: restBorder,
    _readOnly: { boxShadow: 'none', _focusVisible: restBorder },
    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
      _hover: { borderColor: 'border' },
      _focusVisible: restBorder,
    },
  },
} satisfies Record<string, SystemStyleObject>;

export const addonVariants = {
  outline: {
    border: '1px solid',
    borderColor: 'border',
    bg: 'muted',
    color: 'muted-foreground',
    _hover: { borderColor: 'border', bg: 'muted' },
  },
  filled: {
    border: '1px solid',
    borderColor: 'transparent',
    bg: 'muted',
    color: 'muted-foreground',
    _hover: { borderColor: 'transparent', bg: 'muted' },
  },
  flushed: {
    borderBottom: '1px solid',
    borderColor: 'border',
    borderRadius: 'none',
    px: 0,
    bg: 'transparent',
    color: 'muted-foreground',
    _hover: { borderColor: 'border' },
  },
} satisfies Record<string, SystemStyleObject>;

const fieldHeights = {
  xs: '32px',
  sm: '32px',
  md: '36px',
  lg: '40px',
  xl: '44px',
} as const;

const fieldPadding = {
  xs: '12px',
  sm: '12px',
  md: '12px',
  lg: '12px',
  xl: '16px',
} as const;

export type FieldSize = keyof typeof fieldHeights;

export const fieldSizeNames = ['xs', 'sm', 'md', 'lg', 'xl'] as const satisfies readonly FieldSize[];

export function fieldMetrics(size: FieldSize) {
  return {
    height: fieldHeights[size],
    fontSize: 'sm' as const,
    px: fieldPadding[size],
  };
}

export function fieldSize(size: FieldSize) {
  return fieldMetrics(size);
}

export function fieldBox(size: FieldSize) {
  const { height, fontSize } = fieldMetrics(size);
  return {
    width: height,
    height,
    fontSize,
    px: 0,
    textAlign: 'center' as const,
  };
}
