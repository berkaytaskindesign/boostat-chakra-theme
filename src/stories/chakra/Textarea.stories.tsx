import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, Textarea } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Form/Textarea',
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <Stack maxW="320px">
      <Textarea placeholder="Outline" />
      <Textarea placeholder="Filled" variant="filled" />
      <Textarea placeholder="Flushed" variant="flushed" />
    </Stack>
  ),
};
