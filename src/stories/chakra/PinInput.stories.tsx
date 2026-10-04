import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, PinInput, PinInputField } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Form/Pin Input',
  component: PinInput,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <HStack>
      <PinInput>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </HStack>
  ),
};
