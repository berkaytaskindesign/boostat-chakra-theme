import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, HStack, Stack } from '@chakra-ui/react';

import { useToast } from '../../components';

const statuses = ['info', 'success', 'warning', 'error', 'loading'] as const;

const meta = {
  title: 'Chakra v2/Feedback/Toast',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

function ToastDemo() {
  const toast = useToast();

  return (
    <Stack spacing={3}>
      {statuses.map((status) => (
        <HStack key={status} spacing={3}>
          <Button
            variant="outline"
            onClick={() =>
              toast({
                title: status,
                status,
                isClosable: true,
                duration: 6000,
              })
            }
          >
            {status}
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast({
                title: status,
                description: 'A little more detail.',
                status,
                isClosable: true,
                duration: 6000,
              })
            }
          >
            {status} with description
          </Button>
        </HStack>
      ))}
    </Stack>
  );
}

export const Statuses: Story = {
  render: () => <ToastDemo />,
};
