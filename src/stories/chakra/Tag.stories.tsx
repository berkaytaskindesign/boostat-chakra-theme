import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, Icon, Stack, Tag, TagLabel } from '@chakra-ui/react';

import { TagCloseButton } from '../../components';
import { Icons } from '../../icons';

const variants = ['subtle', 'solid', 'outline'] as const;
const sizes = ['sm', 'md', 'lg'] as const;

const meta = {
  title: 'Chakra v2/Data display/Tag',
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VariantsAndSizes: Story = {
  render: () => (
    <Stack spacing={4} align="start">
      {variants.map((variant) => (
        <HStack key={variant} spacing={3}>
          {sizes.map((size) => (
            <Tag key={size} variant={variant} size={size}>
              <TagLabel>
                {variant} {size}
              </TagLabel>
            </Tag>
          ))}
        </HStack>
      ))}
    </Stack>
  ),
};

export const WithIconAndClose: Story = {
  render: () => (
    <HStack spacing={3}>
      <Tag>
        <Icon as={Icons.Tag} boxSize="icon-sm" marginEnd="4px" aria-hidden />
        <TagLabel>Design</TagLabel>
        <TagCloseButton aria-label="Remove Design" />
      </Tag>
      <Tag variant="outline" size="lg">
        <Icon as={Icons.Add} boxSize="icon-sm" marginEnd="4px" aria-hidden />
        <TagLabel>Add label</TagLabel>
      </Tag>
    </HStack>
  ),
};
