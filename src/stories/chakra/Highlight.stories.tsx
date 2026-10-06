import type { Meta, StoryObj } from '@storybook/react-vite';
import { Highlight, Stack, Text } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Typography/Highlight',
  component: Highlight,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Words: Story = {
  render: () => (
    <Stack spacing={4} maxW="360px">
      <Text variant="body">
        <Highlight query={['invoice', 'March']}>
          The March invoice is ready to send to the customer.
        </Highlight>
      </Text>
      <Text variant="muted">
        <Highlight query="northwind">Northwind · Draft invoice · 1,240</Highlight>
      </Text>
    </Stack>
  ),
};
