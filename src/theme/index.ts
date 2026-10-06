import '@fontsource/hedvig-letters-sans/latin-400.css';
import '@fontsource/hedvig-letters-serif/latin-400.css';
import { extendTheme, withDefaultColorScheme, type ThemeConfig } from '@chakra-ui/react';

import accordion from './components/accordion';
import avatar from './components/avatar';
import badge from './components/badge';
import button from './components/button';
import card from './components/card';
import code from './components/code';
import divider from './components/divider';
import drawer from './components/drawer';
import menu from './components/menu';
import modal from './components/modal';
import popover from './components/popover';
import tooltip from './components/tooltip';
import kbd from './components/kbd';
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
import stat from './components/stat';
import switchTheme from './components/switch';
import table from './components/table';
import tag from './components/tag';
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
      Accordion: accordion,
      Avatar: avatar,
      Badge: badge,
      Button: button,
      Card: card,
      Code: code,
      Divider: divider,
      Drawer: drawer,
      Menu: menu,
      Modal: modal,
      Popover: popover,
      Tooltip: tooltip,
      Kbd: kbd,
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
      Stat: stat,
      Switch: switchTheme,
      Table: table,
      Tag: tag,
      Textarea: textarea,
    },
  },
  withDefaultColorScheme({ colorScheme: 'brand' }),
);
