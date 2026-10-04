import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormControl, FormErrorMessage, FormLabel, Stack, Switch } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Form/Switch',
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const States: Story = {
  render: () => (
    <Stack>
      <Switch aria-label="Unchecked" />
      <Switch defaultChecked aria-label="Checked" />
      <Switch isDisabled aria-label="Disabled" />
      <Switch isDisabled defaultChecked aria-label="Disabled checked" />
      <Switch data-focus-visible defaultChecked aria-label="Focus" />
      <FormControl isInvalid>
        <FormLabel>Alerts</FormLabel>
        <Switch aria-label="Invalid" />
        <FormErrorMessage>Required.</FormErrorMessage>
      </FormControl>
    </Stack>
  ),
};
