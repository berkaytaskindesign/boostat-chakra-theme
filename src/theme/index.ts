import '@fontsource/hedvig-letters-sans/latin-400.css';
import '@fontsource/hedvig-letters-serif/latin-400.css';
import { extendTheme, withDefaultColorScheme, type ThemeConfig } from '@chakra-ui/react';

import button from './components/button';
import checkbox from './components/checkbox';
import closeButton from './components/closeButton';
import form from './components/form';
import formError from './components/formError';
import formLabel from './components/formLabel';
import input from './components/input';
import link from './components/link';
import numberInput from './components/numberInput';
import pinInput from './components/pinInput';
import radio from './components/radio';
import select from './components/select';
import slider from './components/slider';
import switchTheme from './components/switch';
import textarea from './components/textarea';
import { colors } from './foundations/colors';
import { fonts } from './foundations/fonts';
import { fontWeights } from './foundations/fontWeights';
import { radii } from './foundations/radii';
import { sizes } from './foundations/sizes';
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
    sizes,
    shadows,
    styles,
    components: {
      Button: button,
      Checkbox: checkbox,
      CloseButton: closeButton,
      Form: form,
      FormError: formError,
      FormLabel: formLabel,
      Input: input,
      Link: link,
      NumberInput: numberInput,
      PinInput: pinInput,
      Radio: radio,
      Select: select,
      Slider: slider,
      Switch: switchTheme,
      Textarea: textarea,
    },
  },
  withDefaultColorScheme({ colorScheme: 'brand' }),
);
