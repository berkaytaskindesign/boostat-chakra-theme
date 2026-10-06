import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, Kbd, Stack, Text } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Data display/Keyboard Key',
  component: Kbd,
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Keys: Story = {
  render: () => (
    <Stack spacing={4} align="start">
      <HStack spacing={2}>
        <Kbd>⌘</Kbd>
        <Text>+</Text>
        <Kbd>K</Kbd>
      </HStack>
      <HStack spacing={2}>
        <Kbd>Ctrl</Kbd>
        <Text>+</Text>
        <Kbd>Shift</Kbd>
        <Text>+</Text>
        <Kbd>P</Kbd>
      </HStack>
    </Stack>
  ),
};
