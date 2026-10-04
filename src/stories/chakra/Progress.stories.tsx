import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress, Stack } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Feedback/Progress',
  component: Progress,
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Stack>
      <Progress value={40} />
      <Progress value={60} hasStripe />
      <Progress size="xs" isIndeterminate />
    </Stack>
  ),
};
