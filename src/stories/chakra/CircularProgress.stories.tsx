import type { Meta, StoryObj } from '@storybook/react-vite';
import { CircularProgressLabel, HStack } from '@chakra-ui/react';

import { CircularProgress } from '../../components';

const meta = {
  title: 'Chakra v2/Feedback/Circular Progress',
  component: CircularProgress,
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Values: Story = {
  render: () => (
    <HStack spacing={6}>
      <CircularProgress value={0} />
      <CircularProgress value={40}>
        <CircularProgressLabel fontSize="xs">40%</CircularProgressLabel>
      </CircularProgress>
      <CircularProgress value={100}>
        <CircularProgressLabel fontSize="xs">100%</CircularProgressLabel>
      </CircularProgress>
      <CircularProgress isIndeterminate />
    </HStack>
  ),
};
