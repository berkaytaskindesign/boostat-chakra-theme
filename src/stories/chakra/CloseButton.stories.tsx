import type { Meta, StoryObj } from '@storybook/react-vite';
import { CloseButton, HStack } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Other/Close Button',
  component: CloseButton,
} satisfies Meta<typeof CloseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
  render: () => (
    <HStack>
      <CloseButton size="sm" />
      <CloseButton />
      <CloseButton size="lg" />
    </HStack>
  ),
};
