import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, HStack, Stack } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Form/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: { children: 'Button' },
};

export const Variants: Story = {
  render: () => (
    <HStack>
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </HStack>
  ),
};

export const ColorSchemes: Story = {
  render: () => (
    <HStack>
      <Button colorScheme="gray">Gray</Button>
      <Button colorScheme="blue">Blue</Button>
      <Button colorScheme="teal">Teal</Button>
      <Button colorScheme="red">Red</Button>
    </HStack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack align="start">
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </Stack>
  ),
};
