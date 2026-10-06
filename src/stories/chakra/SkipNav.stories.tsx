import type { Meta, StoryObj } from '@storybook/react-vite';
import { SkipNavContent, SkipNavLink, Text } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Navigation/Skip Nav',
  component: SkipNavLink,
} satisfies Meta<typeof SkipNavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>
      <Text mb={4}>Press Tab to reveal the skip link. It stays off-screen until it is focused.</Text>
      <SkipNavContent />
      <Text>Page content</Text>
    </>
  ),
};
