import type { Meta, StoryObj } from '@storybook/react-vite';
import { ListItem, List, Stack } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Data display/List',
  component: List,
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unordered: Story = {
  render: () => (
    <Stack>
      <List spacing={2}>
        <ListItem>First item</ListItem>
        <ListItem>Second item</ListItem>
        <ListItem>Third item</ListItem>
      </List>
      <List as="ol" styleType="decimal" spacing={2}>
        <ListItem>First</ListItem>
        <ListItem>Second</ListItem>
        <ListItem>Third</ListItem>
      </List>
    </Stack>
  ),
};
