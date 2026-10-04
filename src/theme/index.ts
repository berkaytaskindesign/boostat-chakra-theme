import '@fontsource/hedvig-letters-sans/latin-400.css';
import '@fontsource/hedvig-letters-serif/latin-400.css';
import { extendTheme, withDefaultColorScheme, type ThemeConfig } from '@chakra-ui/react';

import button from './components/button';
import closeButton from './components/closeButton';
import form from './components/form';
import formError from './components/formError';
import formLabel from './components/formLabel';
import input from './components/input';
import link from './components/link';
import numberInput from './components/numberInput';
import pinInput from './components/pinInput';
import select from './components/select';
import textarea from './components/textarea';
import { colors } from './foundations/colors';
import { fonts } from './foundations/fonts';
import { fontWeights } from './foundations/fontWeights';
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
    fontWeights,
    radii,
    shadows,
    styles,
    components: {
      Button: button,
      CloseButton: closeButton,
      Form: form,
      FormError: formError,
      FormLabel: formLabel,
      Input: input,
      Link: link,
      NumberInput: numberInput,
      PinInput: pinInput,
      Select: select,
      Textarea: textarea,
    },
  },
  withDefaultColorScheme({ colorScheme: 'brand' }),
);
