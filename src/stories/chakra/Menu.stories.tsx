import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Overlay/Menu',
  component: Menu,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Menu>
      <MenuButton as={Button}>Actions</MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a copy</MenuItem>
        <MenuItem>Mark as draft</MenuItem>
        <MenuItem>Delete</MenuItem>
      </MenuList>
    </Menu>
  ),
};
