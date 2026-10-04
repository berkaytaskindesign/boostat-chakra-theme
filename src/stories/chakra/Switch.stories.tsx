import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, Switch } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Form/Switch',
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Stack>
      <Switch />
      <Switch defaultChecked />
      <Switch isDisabled />
    </Stack>
  ),
};
