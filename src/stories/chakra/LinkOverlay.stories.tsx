import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Navigation/Link Overlay',
  component: LinkOverlay,
} satisfies Meta<typeof LinkOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
      <Heading size="md" my="2">
        <LinkOverlay href="#">Article title</LinkOverlay>
      </Heading>
      <Text>The whole card is clickable through the overlay link.</Text>
    </LinkBox>
  ),
};
