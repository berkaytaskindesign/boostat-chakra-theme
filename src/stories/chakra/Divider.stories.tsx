import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider, Stack, Text } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Data display/Divider',
  component: Divider,
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <Stack>
      <Text>Solid</Text>
      <Divider />
      <Text>Dashed</Text>
      <Divider variant="dashed" />
    </Stack>
  ),
};
