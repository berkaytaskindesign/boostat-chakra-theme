import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, Spinner } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Feedback/Spinner',
  component: Spinner,
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
  render: () => (
    <HStack>
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </HStack>
  ),
};
