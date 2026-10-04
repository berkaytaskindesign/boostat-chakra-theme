// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([globalIgnores(['dist', 'reference']), {
  files: ['**/*.{ts,tsx}'],
  extends: [
    js.configs.recommended,
    tseslint.configs.recommended,
    reactHooks.configs.flat.recommended,
    reactRefresh.configs.vite,
  ],
  languageOptions: {
    globals: globals.browser,
  },
}, {
  files: ['src/stories/**/*.{ts,tsx}', 'src/components/**/*.{ts,tsx}'],
  ignores: [
    'src/components/accordionIcon.tsx',
    'src/components/alertIcon.tsx',
    'src/components/avatar.tsx',
    'src/components/checkbox.tsx',
    'src/components/closeButton.tsx',
    'src/components/decorativeIcon.tsx',
    'src/components/drawerCloseButton.tsx',
    'src/components/formErrorIcon.tsx',
    'src/components/menuItemOption.tsx',
    'src/components/modalCloseButton.tsx',
    'src/components/numberDecrementStepper.tsx',
    'src/components/numberIncrementStepper.tsx',
    'src/components/popoverCloseButton.tsx',
    'src/components/select.tsx',
    'src/components/stepIcon.tsx',
    'src/components/tagCloseButton.tsx',
    'src/components/useToast.tsx',
    'src/components/index.ts',
  ],
  rules: {
    'no-restricted-imports': ['error', {
      paths: [
        {
          name: '@chakra-ui/react',
          importNames: [
            'CloseButton',
            'ModalCloseButton',
            'DrawerCloseButton',
            'PopoverCloseButton',
            'Select',
            'Checkbox',
            'NumberIncrementStepper',
            'NumberDecrementStepper',
            'AccordionIcon',
            'AlertIcon',
            'FormErrorIcon',
            'Avatar',
            'TagCloseButton',
            'MenuItemOption',
            'StepIcon',
            'useToast',
          ],
          message: 'Import this from src/components.',
        },
        {
          name: '@chakra-ui/icons',
          message: 'Do not use @chakra-ui/icons. Import icons from src/icons and wrapped components from src/components.',
        },
      ],
    }],
  },
}, {
  files: ['src/components/useToast.tsx'],
  rules: {
    'react-refresh/only-export-components': 'off',
  },
}, {
  files: ['.storybook/**/*.{ts,tsx}'],
  rules: {
    'react-refresh/only-export-components': 'off',
  },
}, ...storybook.configs["flat/recommended"]])
