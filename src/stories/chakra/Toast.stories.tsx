import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, useToast } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Feedback/Toast',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

function ToastDemo() {
  const toast = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          title: 'Account created.',
          description: 'We created your account.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      }
    >
      Show toast
    </Button>
  );
}

export const Default: Story = {
  render: () => <ToastDemo />,
};
