import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckboxGroup, FormControl, FormErrorMessage, FormLabel, Stack } from '@chakra-ui/react';

import { Checkbox } from '../../components';

const meta = {
  title: 'Chakra v2/Form/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const States: Story = {
  render: () => (
    <Stack>
      <Checkbox>Unchecked</Checkbox>
      <Checkbox defaultChecked>Checked</Checkbox>
      <Checkbox isIndeterminate>Indeterminate</Checkbox>
      <Checkbox isDisabled>Disabled</Checkbox>
      <Checkbox isDisabled defaultChecked>
        Disabled checked
      </Checkbox>
      <Checkbox isDisabled isIndeterminate>
        Disabled indeterminate
      </Checkbox>
      <Checkbox data-focus-visible defaultChecked>
        Focus
      </Checkbox>
      <FormControl isInvalid>
        <FormLabel>Terms</FormLabel>
        <Checkbox>Accept</Checkbox>
        <FormErrorMessage>Required.</FormErrorMessage>
      </FormControl>
    </Stack>
  ),
};

export const Group: Story = {
  render: () => (
    <CheckboxGroup defaultValue={['email']}>
      <Stack>
        <Checkbox value="email">Email</Checkbox>
        <Checkbox value="sms">SMS</Checkbox>
      </Stack>
    </CheckboxGroup>
  ),
};
