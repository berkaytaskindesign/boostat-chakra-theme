import type { Meta, StoryObj } from '@storybook/react-vite';
import { AvatarBadge, AvatarGroup, HStack, Stack, Text } from '@chakra-ui/react';

import { Avatar } from '../../components';

const sizes = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
const names = ['Ada Lovelace', 'Grace Hopper', 'Alan Turing', 'Katherine Johnson'];
const portrait =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect width="96" height="96" fill="#18181b"/><circle cx="48" cy="38" r="16" fill="#fafafa"/><rect x="28" y="60" width="40" height="22" fill="#fafafa"/></svg>',
  );

const meta = {
  title: 'Chakra v2/Media and icons/Avatar',
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
  render: () => (
    <HStack spacing={4} align="end">
      {sizes.map((size) => (
        <Stack key={size} spacing={2} align="center">
          <Avatar size={size} name="Ada Lovelace" />
          <Text fontSize="xs">{size}</Text>
        </Stack>
      ))}
    </HStack>
  ),
};

export const RoundAndSquare: Story = {
  render: () => (
    <HStack spacing={6} align="end">
      <Stack spacing={2} align="center">
        <Avatar name="Ada Lovelace" src={portrait} />
        <Text fontSize="xs">Round</Text>
      </Stack>
      <Stack spacing={2} align="center">
        <Avatar name="Acme" src={portrait} variant="square" />
        <Text fontSize="xs">Square</Text>
      </Stack>
    </HStack>
  ),
};

export const ImageInitialsAndIcon: Story = {
  render: () => (
    <Stack spacing={6} align="start">
      <HStack spacing={4}>
        <Avatar name="Ada Lovelace" src={portrait} />
        {names.map((name) => (
          <Avatar key={name} name={name} />
        ))}
        <Avatar />
      </HStack>
      <AvatarGroup max={2}>
        {names.map((name) => (
          <Avatar key={name} name={name} />
        ))}
        <Avatar name="Margaret Hamilton" />
      </AvatarGroup>
      <Avatar name="Ada Lovelace">
        <AvatarBadge boxSize="1.25em" />
      </Avatar>
    </Stack>
  ),
};
