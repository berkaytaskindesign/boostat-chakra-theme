import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Data display/Tag',
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <HStack>
      <Tag>Gray</Tag>
      <Tag colorScheme="teal">Teal</Tag>
      <Tag colorScheme="blue" variant="solid">
        <TagLabel>Solid</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag colorScheme="red" variant="outline">
        Outline
      </Tag>
    </HStack>
  ),
};
