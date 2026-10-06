import type { Meta, StoryObj } from '@storybook/react-vite';
import { List, ListIcon, ListItem, OrderedList, Stack, UnorderedList } from '@chakra-ui/react';

import { Icons } from '../../icons';

const items = ['First item', 'Second item', 'Third item'];

const meta = {
  title: 'Chakra v2/Data display/List',
  component: List,
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Kinds: Story = {
  render: () => (
    <Stack spacing={8} align="start">
      <UnorderedList>
        {items.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </UnorderedList>
      <OrderedList>
        {items.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </OrderedList>
      <List styleType="disc">
        {items.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </List>
      <List>
        <ListItem>
          <ListIcon as={Icons.Check} />
          Sent
        </ListItem>
        <ListItem>
          <ListIcon as={Icons.ListBulleted} />
          Draft
        </ListItem>
      </List>
    </Stack>
  ),
};
