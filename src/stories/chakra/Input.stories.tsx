import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input, InputGroup, InputLeftAddon, InputRightElement, Stack } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Form/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <Stack maxW="320px">
      <Input placeholder="Outline" />
      <Input placeholder="Filled" variant="filled" />
      <Input placeholder="Flushed" variant="flushed" />
      <InputGroup>
        <InputLeftAddon>https://</InputLeftAddon>
        <Input placeholder="mysite" />
      </InputGroup>
      <InputGroup>
        <Input placeholder="Search" />
        <InputRightElement pointerEvents="none">/</InputRightElement>
      </InputGroup>
    </Stack>
  ),
};
