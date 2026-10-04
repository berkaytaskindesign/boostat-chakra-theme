import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, Stack, Text } from '@chakra-ui/react';

import { Select } from '../../components';

const variants = ['outline', 'filled', 'flushed'] as const;
const sizes = ['sm', 'md', 'lg', 'xl'] as const;

const options = (
  <>
    <optgroup label="Colors">
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
    </optgroup>
  </>
);

const meta = {
  title: 'Chakra v2/Form/Select',
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VariantsAndSizes: Story = {
  name: 'Variants and sizes',
  render: () => (
    <Stack spacing={4}>
      {variants.map((variant) => (
        <HStack key={variant} spacing={3} align="center">
          <Text w="20" fontSize="sm" color="muted-foreground">
            {variant}
          </Text>
          {sizes.map((size) => (
            <Select key={size} variant={variant} size={size} placeholder={size} maxW="28">
              {options}
            </Select>
          ))}
        </HStack>
      ))}
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack spacing={4} maxW="xs">
      {variants.map((variant) => (
        <Stack key={variant} spacing={2}>
          <Text fontSize="sm" color="muted-foreground">
            {variant}
          </Text>
          <Select variant={variant} placeholder="Default">
            {options}
          </Select>
          <Select variant={variant} placeholder="Focus" data-focus-visible>
            {options}
          </Select>
          <Select variant={variant} placeholder="Invalid" isInvalid defaultValue="red">
            {options}
          </Select>
          <Select variant={variant} placeholder="Disabled" isDisabled>
            {options}
          </Select>
          <Select variant={variant} placeholder="Read only" isReadOnly defaultValue="red" data-focus-visible>
            {options}
          </Select>
        </Stack>
      ))}
    </Stack>
  ),
};
