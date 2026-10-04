import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Stack } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Form/Form Control',
  component: FormControl,
} satisfies Meta<typeof FormControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const States: Story = {
  render: () => (
    <Stack spacing={6} maxW="xs">
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="ada@midday.ai" />
        <FormHelperText>We will never share your email.</FormHelperText>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="ada@midday.ai" />
      </FormControl>
      <FormControl isInvalid>
        <FormLabel>Email</FormLabel>
        <Input type="email" defaultValue="not-an-email" />
        <FormErrorMessage>Email is invalid.</FormErrorMessage>
      </FormControl>
      <FormControl isDisabled>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="ada@midday.ai" />
        <FormHelperText>Disabled helper.</FormHelperText>
      </FormControl>
    </Stack>
  ),
};
