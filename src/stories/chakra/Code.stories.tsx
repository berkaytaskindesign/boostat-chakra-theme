import type { Meta, StoryObj } from '@storybook/react-vite';
import { Code, HStack, Text } from '@chakra-ui/react';

const variants = ['subtle', 'solid', 'outline'] as const;

const meta = {
  title: 'Chakra v2/Data display/Code',
  component: Code,
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inline: Story = {
  render: () => (
    <Text>
      Install the theme with <Code>npm install midday-chakra-theme</Code> and import it once.
    </Text>
  ),
};

const sample = `import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'midday-chakra-theme'

export function App() {
  return <ChakraProvider theme={theme}>...</ChakraProvider>
}`;

export const Multiline: Story = {
  render: () => (
    <Code display="block" whiteSpace="pre" py="8px" lineHeight="1.6" maxW="md">
      {sample}
    </Code>
  ),
};

export const Variants: Story = {
  render: () => (
    <HStack spacing={3}>
      {variants.map((variant) => (
        <Code key={variant} variant={variant}>
          {variant}
        </Code>
      ))}
    </HStack>
  ),
};
