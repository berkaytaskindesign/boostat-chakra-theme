import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton, SkeletonText, Stack } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Feedback/Skeleton',
  component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Stack maxW="320px">
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <SkeletonText mt="4" noOfLines={3} spacing="4" />
    </Stack>
  ),
};
