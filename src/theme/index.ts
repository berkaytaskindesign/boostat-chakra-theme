import '@fontsource/hedvig-letters-sans/latin-400.css';
import '@fontsource/hedvig-letters-serif/latin-400.css';
import { extendTheme, withDefaultColorScheme, type ThemeConfig } from '@chakra-ui/react';

import { colors } from './foundations/colors';
import { fonts } from './foundations/fonts';
import { radii } from './foundations/radii';
import { semanticTokens } from './foundations/semanticTokens';
import { shadows } from './foundations/shadows';
import styles from './styles';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: false,
};

export const theme = extendTheme(
  {
    config,
    colors,
    semanticTokens,
    fonts,
    radii,
    shadows,
    styles,
  },
  withDefaultColorScheme({ colorScheme: 'brand' }),
);
