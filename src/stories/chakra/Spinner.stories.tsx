import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, HStack, Spinner, Stack } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Feedback/Spinner',
  component: Spinner,
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
  render: () => (
    <Stack spacing={6}>
      <HStack spacing={4}>
        <Spinner size="xs" />
        <Spinner size="sm" />
        <Spinner />
        <Spinner size="lg" />
        <Spinner size="xl" />
      </HStack>
      <HStack spacing={3}>
        <Button isLoading>Saving</Button>
        <Button isLoading variant="outline">
          Saving
        </Button>
      </HStack>
    </Stack>
  ),
};
