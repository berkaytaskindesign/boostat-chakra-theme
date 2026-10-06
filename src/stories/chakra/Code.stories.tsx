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
