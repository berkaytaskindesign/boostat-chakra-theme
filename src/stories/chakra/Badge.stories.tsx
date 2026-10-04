import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge, HStack } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Data display/Badge',
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <HStack>
      <Badge>Default</Badge>
      <Badge colorScheme="green">Success</Badge>
      <Badge colorScheme="red" variant="solid">
        Solid
      </Badge>
      <Badge colorScheme="purple" variant="outline">
        Outline
      </Badge>
    </HStack>
  ),
};
