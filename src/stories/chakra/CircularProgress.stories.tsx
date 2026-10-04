import type { Meta, StoryObj } from '@storybook/react-vite';
import { CircularProgress, HStack } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Feedback/Circular Progress',
  component: CircularProgress,
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <HStack>
      <CircularProgress value={40} />
      <CircularProgress value={80} color="green.400" />
      <CircularProgress isIndeterminate />
    </HStack>
  ),
};
