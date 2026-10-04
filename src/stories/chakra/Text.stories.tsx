import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, Text } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Typography/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Styles: Story = {
  render: () => (
    <Stack>
      <Text fontSize="sm">Small</Text>
      <Text>Body</Text>
      <Text fontSize="xl">Large</Text>
      <Text as="b">Bold</Text>
      <Text as="i">Italic</Text>
    </Stack>
  ),
};
