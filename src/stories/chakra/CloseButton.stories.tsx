import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, Stack } from '@chakra-ui/react';

import { CloseButton } from '../../components';

const sizes = ['sm', 'md', 'lg'] as const;

const meta = {
  title: 'Chakra v2/Other/Close Button',
  component: CloseButton,
} satisfies Meta<typeof CloseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SizesAndStates: Story = {
  name: 'Sizes and states',
  render: () => (
    <Stack spacing={4} align="start">
      <HStack spacing={3}>
        {sizes.map((size) => (
          <CloseButton key={size} size={size} aria-label={size} />
        ))}
      </HStack>
      <HStack spacing={3}>
        <CloseButton aria-label="Default" />
        <CloseButton aria-label="Hover" data-hover />
        <CloseButton aria-label="Active" data-active />
        <CloseButton aria-label="Disabled" isDisabled />
      </HStack>
    </Stack>
  ),
};
