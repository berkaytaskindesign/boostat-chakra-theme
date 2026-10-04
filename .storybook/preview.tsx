import type { Preview } from '@storybook/react-vite';
import { Box, ChakraProvider, useColorMode } from '@chakra-ui/react';
import { useEffect, type ReactNode } from 'react';

import { theme } from '../src/theme';

function ColorModeSync({
  colorMode,
  children,
}: {
  colorMode: 'light' | 'dark';
  children: ReactNode;
}) {
  const { colorMode: current, setColorMode } = useColorMode();

  useEffect(() => {
    if (current !== colorMode) setColorMode(colorMode);
  }, [colorMode, current, setColorMode]);

  return (
    <Box
      bg={colorMode === 'dark' ? 'gray.800' : 'white'}
      color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800'}
      p={6}
      minH="100vh"
    >
      {children}
    </Box>
  );
}

const preview: Preview = {
  globalTypes: {
    colorMode: {
      name: 'Color mode',
      description: 'Chakra UI v2 color mode',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      if (!context.title.startsWith('Chakra v2/')) return <Story />;

      const colorMode = context.globals.colorMode === 'dark' ? 'dark' : 'light';

      return (
        <ChakraProvider theme={theme}>
          <ColorModeSync colorMode={colorMode}>
            <Story />
          </ColorModeSync>
        </ChakraProvider>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;