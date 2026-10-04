import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Navigation/Link',
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: 'https://v2.chakra-ui.com/docs/components',
    children: 'Chakra UI v2 components',
    isExternal: true,
  },
};
