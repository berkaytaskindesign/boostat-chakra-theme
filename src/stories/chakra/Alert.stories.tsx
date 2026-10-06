import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert, AlertDescription, AlertTitle, Box, Stack, Text } from '@chakra-ui/react';

import { AlertIcon, CloseButton } from '../../components';

const statuses = ['info', 'success', 'warning', 'error', 'loading'] as const;
const variants = ['subtle', 'solid', 'left-accent', 'top-accent', 'toast'] as const;

const meta = {
  title: 'Chakra v2/Feedback/Alert',
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <Stack spacing={8}>
      {variants.map((variant) => (
        <Stack key={variant} spacing={3}>
          <Text fontSize="sm" color="muted-foreground">
            {variant}
          </Text>
          {statuses.map((status) => (
            <Alert key={status} status={status} variant={variant}>
              <AlertIcon />
              <Box>
                <AlertTitle textTransform="capitalize">{status}</AlertTitle>
                <AlertDescription>This is an {status} alert.</AlertDescription>
              </Box>
            </Alert>
          ))}
        </Stack>
      ))}
    </Stack>
  ),
};

export const WithClose: Story = {
  name: 'With close button',
  render: () => (
    <Alert status="warning">
      <AlertIcon />
      <Box flex="1">
        <AlertTitle>Check the date</AlertTitle>
        <AlertDescription>This invoice is still a draft.</AlertDescription>
      </Box>
      <CloseButton size="sm" />
    </Alert>
  ),
};
