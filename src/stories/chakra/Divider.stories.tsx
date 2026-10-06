import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider, HStack, Stack, Text } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Data display/Divider',
  component: Divider,
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <Stack spacing={4} maxW="sm">
      <Text>Above</Text>
      <Divider />
      <Text>Below</Text>
    </Stack>
  ),
};

export const Vertical: Story = {
  render: () => (
    <HStack h="40px" spacing={4} align="stretch">
      <Text>Left</Text>
      <Divider orientation="vertical" />
      <Text>Right</Text>
    </HStack>
  ),
};

export const Dashed: Story = {
  render: () => (
    <Stack spacing={4} maxW="sm">
      <Text>Above</Text>
      <Divider variant="dashed" />
      <Text>Below</Text>
    </Stack>
  ),
};
