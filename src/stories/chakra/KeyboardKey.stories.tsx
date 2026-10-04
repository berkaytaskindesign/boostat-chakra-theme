import type { Meta, StoryObj } from '@storybook/react-vite';
import { Kbd, Text } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Data display/Keyboard Key',
  component: Kbd,
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Text>
      <Kbd>shift</Kbd> + <Kbd>H</Kbd>
    </Text>
  ),
};
