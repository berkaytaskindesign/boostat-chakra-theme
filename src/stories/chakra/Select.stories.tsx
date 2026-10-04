import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select, Stack } from '@chakra-ui/react';

const options = (
  <>
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
  </>
);

const meta = {
  title: 'Chakra v2/Form/Select',
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <Stack maxW="320px">
      <Select placeholder="Outline">{options}</Select>
      <Select placeholder="Filled" variant="filled">
        {options}
      </Select>
      <Select placeholder="Flushed" variant="flushed">
        {options}
      </Select>
    </Stack>
  ),
};
