import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, Icon, IconButton, type IconProps } from '@chakra-ui/react';

function PlusIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </Icon>
  );
}

const meta = {
  title: 'Chakra v2/Form/Icon Button',
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { 'aria-label': 'Add', icon: <PlusIcon /> },
};

export const Variants: Story = {
  args: { 'aria-label': 'Add' },
  render: () => (
    <HStack>
      <IconButton aria-label="Add" icon={<PlusIcon />} />
      <IconButton aria-label="Add" variant="outline" icon={<PlusIcon />} />
      <IconButton aria-label="Add" variant="ghost" icon={<PlusIcon />} />
    </HStack>
  ),
};
