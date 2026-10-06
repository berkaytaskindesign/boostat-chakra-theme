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
  files: ['src/**/*.{ts,tsx}'],
  ignores: ['src/icons/**'],
  rules: {
    'no-restricted-imports': ['error', {
      paths: [
        {
          name: '@carbon/icons-react',
          message: 'Import icons from src/icons.',
        },
        {
          name: '@chakra-ui/icons',
          message: 'Do not use @chakra-ui/icons. Import icons from src/icons.',
        },
        {
          name: 'lucide-react',
          message: 'Import icons from src/icons.',
        },
        {
          name: '@radix-ui/react-icons',
          message: 'Import icons from src/icons.',
        },
      ],
      patterns: [
        {
          group: ['react-icons', 'react-icons/*', '@heroicons/*'],
          message: 'Import icons from src/icons.',
        },
      ],
    }],
  },
}, {
  files: ['src/stories/**/*.{ts,tsx}', 'src/components/**/*.{ts,tsx}'],
  ignores: [
    'src/components/alertDialog.tsx',
    'src/components/accordionIcon.tsx',
    'src/components/alertIcon.tsx',
    'src/components/avatar.tsx',
    'src/components/breadcrumb.tsx',
    'src/components/checkbox.tsx',
    'src/components/closeButton.tsx',
    'src/components/decorativeIcon.tsx',
    'src/components/drawer.tsx',
    'src/components/drawerCloseButton.tsx',
    'src/components/formErrorIcon.tsx',
    'src/components/menuItemOption.tsx',
    'src/components/modalCloseButton.tsx',
    'src/components/numberDecrementStepper.tsx',
    'src/components/numberIncrementStepper.tsx',
    'src/components/popoverCloseButton.tsx',
    'src/components/circularProgress.tsx',
    'src/components/select.tsx',
    'src/components/skeleton.tsx',
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
            'StatArrow',
            'AlertDialog',
            'Drawer',
            'Breadcrumb',
            'useToast',
            'CircularProgress',
            'Skeleton',
            'SkeletonText',
            'SkeletonCircle',
          ],
          message: 'Import this from src/components.',
        },
        {
          name: '@chakra-ui/icons',
          message: 'Do not use @chakra-ui/icons. Import icons from src/icons and wrapped components from src/components.',
        },
        {
          name: '@carbon/icons-react',
          message: 'Import icons from src/icons.',
        },
        {
          name: 'lucide-react',
          message: 'Import icons from src/icons.',
        },
        {
          name: '@radix-ui/react-icons',
          message: 'Import icons from src/icons.',
        },
      ],
      patterns: [
        {
          group: ['react-icons', 'react-icons/*', '@heroicons/*'],
          message: 'Import icons from src/icons.',
        },
      ],
    }],
  },
}, {
  files: ['src/components/useToast.tsx', 'src/icons/index.tsx'],
  rules: {
    'react-refresh/only-export-components': 'off',
  },
}, {
  files: ['.storybook/**/*.{ts,tsx}'],
  rules: {
    'react-refresh/only-export-components': 'off',
  },
}, ...storybook.configs["flat/recommended"]])
