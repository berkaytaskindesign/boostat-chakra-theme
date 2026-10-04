import type { Meta, StoryObj } from '@storybook/react-vite';
import { Code, Text } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Data display/Code',
  component: Code,
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Text>
      Run <Code>npm install</Code> to get started.
    </Text>
  ),
};
