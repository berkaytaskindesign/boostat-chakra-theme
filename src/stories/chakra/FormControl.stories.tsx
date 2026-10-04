import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Form/Form Control',
  component: FormControl,
} satisfies Meta<typeof FormControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithHelperText: Story = {
  render: () => (
    <FormControl maxW="320px">
      <FormLabel>Email</FormLabel>
      <Input type="email" />
      <FormHelperText>We will never share your email.</FormHelperText>
    </FormControl>
  ),
};

export const Invalid: Story = {
  render: () => (
    <Stack>
      <FormControl isInvalid maxW="320px">
        <FormLabel>Email</FormLabel>
        <Input type="email" defaultValue="not-an-email" />
        <FormErrorMessage>Email is invalid.</FormErrorMessage>
      </FormControl>
    </Stack>
  ),
};
