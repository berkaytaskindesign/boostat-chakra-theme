import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox, Stack } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Form/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Stack>
      <Checkbox defaultChecked>Checked</Checkbox>
      <Checkbox>Unchecked</Checkbox>
      <Checkbox isIndeterminate>Indeterminate</Checkbox>
      <Checkbox isDisabled>Disabled</Checkbox>
    </Stack>
  ),
};
