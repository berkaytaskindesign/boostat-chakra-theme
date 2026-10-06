import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link, Stack, Text } from '@chakra-ui/react';

const textSizes = ['sm', 'md'] as const;

const meta = {
  title: 'Chakra v2/Navigation/Link',
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inline: Story = {
  render: () => (
    <Stack spacing={4} align="start" maxW="sm">
      {textSizes.map((size) => (
        <Text key={size} fontSize={size}>
          Read the <Link href="#">documentation</Link> before you send the invoice.
        </Text>
      ))}
      <Text fontSize="sm">
        <Link href="#">Default</Link>
      </Text>
      <Text fontSize="sm">
        <Link href="#" data-hover>
          Hover
        </Link>
      </Text>
      <Text fontSize="sm" color="muted-foreground">
        <Link href="#">Muted</Link>
      </Text>
      <Text fontSize="sm">
        <Link href="#" aria-disabled>
          Disabled
        </Link>
      </Text>
    </Stack>
  ),
};

export const Plain: Story = {
  render: () => (
    <Stack spacing={2} align="start">
      <Link href="#" variant="plain">
        Overview
      </Link>
      <Link href="#" variant="plain" data-hover>
        Customers
      </Link>
      <Link href="#" variant="plain" aria-disabled>
        Disabled
      </Link>
    </Stack>
  ),
};
