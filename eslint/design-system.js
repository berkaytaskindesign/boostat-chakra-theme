/** Shareable import rules for this theme. Import the array from an ESLint flat config. */

const iconLibraries = {
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
};

const wrappedComponents = [
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
];

export const designSystemRestrictions = [
  {
    files: ['src/**/*.{ts,tsx}'],
    ignores: ['src/icons/**'],
    rules: {
      'no-restricted-imports': ['error', iconLibraries],
    },
  },
  {
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
            importNames: wrappedComponents,
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
        patterns: iconLibraries.patterns,
      }],
    },
  },
];
