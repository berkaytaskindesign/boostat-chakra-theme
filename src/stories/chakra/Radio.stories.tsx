import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormControl, FormErrorMessage, FormLabel, Radio, RadioGroup, Stack } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Form/Radio',
  component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const States: Story = {
  render: () => (
    <Stack>
      <Radio>Unchecked</Radio>
      <Radio defaultChecked>Checked</Radio>
      <Radio isDisabled>Disabled</Radio>
      <Radio isDisabled defaultChecked>
        Disabled checked
      </Radio>
      <FormControl isInvalid>
        <FormLabel>Plan</FormLabel>
        <Radio>Monthly</Radio>
        <FormErrorMessage>Pick a plan.</FormErrorMessage>
      </FormControl>
    </Stack>
  ),
};

function GroupDemo() {
  const [value, setValue] = useState('a');

  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack>
        <Radio value="a">Alpha</Radio>
        <Radio value="b">Beta</Radio>
      </Stack>
    </RadioGroup>
  );
}

export const Group: Story = {
  render: () => <GroupDemo />,
};
