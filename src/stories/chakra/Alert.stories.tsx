import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Stack,
} from '@chakra-ui/react';

const statuses = ['info', 'success', 'warning', 'error'] as const;

const meta = {
  title: 'Chakra v2/Feedback/Alert',
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Statuses: Story = {
  render: () => (
    <Stack>
      {statuses.map((status) => (
        <Alert key={status} status={status}>
          <AlertIcon />
          <Box>
            <AlertTitle textTransform="capitalize">{status}</AlertTitle>
            <AlertDescription>This is an {status} alert.</AlertDescription>
          </Box>
        </Alert>
      ))}
    </Stack>
  ),
};
