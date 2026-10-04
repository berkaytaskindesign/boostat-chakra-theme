import type { Meta, StoryObj } from '@storybook/react-vite';
import { AvatarGroup, HStack } from '@chakra-ui/react';

import { Avatar } from '../../components';

const meta = {
  title: 'Chakra v2/Media and icons/Avatar',
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <HStack>
      <Avatar name="Segun Adebayo" />
      <Avatar name="Kent Dodds" />
      <AvatarGroup max={2}>
        <Avatar name="Ryan Florence" />
        <Avatar name="Segun Adebayo" />
        <Avatar name="Kent Dodds" />
      </AvatarGroup>
    </HStack>
  ),
};
