import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, Stack, Text, Textarea } from '@chakra-ui/react';

const variants = ['outline', 'filled', 'flushed'] as const;
const sizes = ['sm', 'md', 'lg', 'xl'] as const;

const meta = {
  title: 'Chakra v2/Form/Textarea',
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VariantsAndSizes: Story = {
  name: 'Variants and sizes',
  render: () => (
    <Stack spacing={4}>
      {variants.map((variant) => (
        <HStack key={variant} spacing={3} align="start">
          <Text w="20" fontSize="sm" color="muted-foreground">
            {variant}
          </Text>
          {sizes.map((size) => (
            <Textarea key={size} variant={variant} size={size} placeholder={size} maxW="40" />
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
          <Textarea variant={variant} placeholder="Default" />
          <Textarea variant={variant} placeholder="Focus" data-focus-visible />
          <Textarea variant={variant} placeholder="Invalid" isInvalid defaultValue="Invalid" />
          <Textarea variant={variant} placeholder="Disabled" isDisabled />
          <Textarea variant={variant} placeholder="Read only" isReadOnly defaultValue="Read only" data-focus-visible />
        </Stack>
      ))}
    </Stack>
  ),
};
