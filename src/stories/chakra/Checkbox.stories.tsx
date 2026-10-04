import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckIcon, MinusIcon } from '@radix-ui/react-icons';
import {
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Stack,
} from '@chakra-ui/react';

function CheckboxMark({
  isIndeterminate,
  isChecked,
}: {
  isIndeterminate?: boolean;
  isChecked?: boolean;
}) {
  if (!isChecked && !isIndeterminate) return null;
  const Mark = isIndeterminate ? MinusIcon : CheckIcon;
  return <Mark width={16} height={16} style={{ flexShrink: 0, maxWidth: 'none' }} />;
}

const icon = <CheckboxMark />;

const meta = {
  title: 'Chakra v2/Form/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const States: Story = {
  render: () => (
    <Stack>
      <Checkbox icon={icon}>Unchecked</Checkbox>
      <Checkbox icon={icon} defaultChecked>
        Checked
      </Checkbox>
      <Checkbox icon={icon} isIndeterminate>
        Indeterminate
      </Checkbox>
      <Checkbox icon={icon} isDisabled>
        Disabled
      </Checkbox>
      <Checkbox icon={icon} isDisabled defaultChecked>
        Disabled checked
      </Checkbox>
      <Checkbox icon={icon} isDisabled isIndeterminate>
        Disabled indeterminate
      </Checkbox>
      <Checkbox icon={icon} data-focus-visible defaultChecked>
        Focus
      </Checkbox>
      <FormControl isInvalid>
        <FormLabel>Terms</FormLabel>
        <Checkbox icon={icon}>Accept</Checkbox>
        <FormErrorMessage>Required.</FormErrorMessage>
      </FormControl>
    </Stack>
  ),
};

export const Group: Story = {
  render: () => (
    <CheckboxGroup defaultValue={['email']}>
      <Stack>
        <Checkbox icon={icon} value="email">
          Email
        </Checkbox>
        <Checkbox icon={icon} value="sms">
          SMS
        </Checkbox>
      </Stack>
    </CheckboxGroup>
  ),
};
