import type { ComponentStyleConfig } from '@chakra-ui/react';
import { cssVar } from '@chakra-ui/styled-system';

const $arrowBg = cssVar('popper-arrow-bg');

const tooltip: ComponentStyleConfig = {
  baseStyle: {
    bg: 'foreground',
    color: 'background',
    border: 'none',
    borderRadius: 'none',
    boxShadow: 'overlay',
    fontFamily: 'body',
    fontSize: 'xs',
    fontWeight: 'normal',
    px: '8px',
    py: '4px',
    maxW: '280px',
    [$arrowBg.variable]: 'colors.foreground',
  },
};

export default tooltip;
