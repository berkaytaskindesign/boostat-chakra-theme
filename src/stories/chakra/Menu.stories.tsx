import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  MenuOptionGroup,
} from '@chakra-ui/react';

import { MenuItemOption } from '../../components';
import { Icons } from '../../icons';

const meta = {
  title: 'Chakra v2/Overlay/Menu',
  component: Menu,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Items: Story = {
  render: () => (
    <Menu defaultIsOpen>
      <MenuButton as={Button}>Actions</MenuButton>
      <MenuList>
        <MenuItem icon={<Icon as={Icons.Download} />} command="⌘D">
          Download
        </MenuItem>
        <MenuItem icon={<Icon as={Icons.Copy} />} command="⌘C">
          Create a copy
        </MenuItem>
        <MenuItem icon={<Icon as={Icons.Edit} />} command="⌘E">
          Rename
        </MenuItem>
        <MenuDivider />
        <MenuItem isDisabled icon={<Icon as={Icons.Close} />}>
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  ),
};

export const Groups: Story = {
  render: () => (
    <Menu defaultIsOpen>
      <MenuButton as={Button}>Workspace</MenuButton>
      <MenuList>
        <MenuGroup title="Account">
          <MenuItem icon={<Icon as={Icons.AccountCircle} />}>Profile</MenuItem>
          <MenuItem icon={<Icon as={Icons.Tune} />}>Settings</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Project">
          <MenuItem icon={<Icon as={Icons.Add} />}>New invoice</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  ),
};

export const Options: Story = {
  render: () => (
    <Menu defaultIsOpen closeOnSelect={false}>
      <MenuButton as={Button}>View</MenuButton>
      <MenuList>
        <MenuOptionGroup title="Layout" type="radio" defaultValue="list">
          <MenuItemOption value="list">List</MenuItemOption>
          <MenuItemOption value="board">Board</MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider />
        <MenuOptionGroup title="Columns" type="checkbox" defaultValue={['status', 'amount']}>
          <MenuItemOption value="status">Status</MenuItemOption>
          <MenuItemOption value="amount">Amount</MenuItemOption>
          <MenuItemOption value="date">Date</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  ),
};
