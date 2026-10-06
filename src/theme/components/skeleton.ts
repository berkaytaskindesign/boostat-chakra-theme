import { cssVar, defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const $start = cssVar('skeleton-start-color');
const $end = cssVar('skeleton-end-color');

const accentVars = {
  [$start.variable]: 'colors.accent',
  [$end.variable]: 'colors.accent',
};

const skeleton = defineStyleConfig({
  baseStyle: defineStyle({
    ...accentVars,
    _dark: accentVars,
    bg: 'accent',
    opacity: 1,
    borderRadius: 'none',
    boxShadow: 'none',
    borderColor: 'accent',
  }),
});

export default skeleton;
