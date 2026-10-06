import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, PinInput, PinInputField, Stack, Text } from '@chakra-ui/react';

const variants = ['outline', 'filled', 'flushed'] as const;
const sizes = ['sm', 'md', 'lg', 'xl'] as const;

const meta = {
  title: 'Chakra v2/Form/Pin Input',
  component: PinInput,
} satisfies Meta;

export default meta;
type Story = StoryObj;

function Boxes({
  variant = 'outline',
  size = 'md',
  ...props
}: {
  variant?: (typeof variants)[number];
  size?: (typeof sizes)[number];
  isInvalid?: boolean;
  isDisabled?: boolean;
}) {
  return (
    <HStack>
      <PinInput variant={variant} size={size} {...props}>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </HStack>
  );
}

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
            <Boxes key={size} variant={variant} size={size} />
          ))}
        </HStack>
      ))}
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack spacing={4}>
      {variants.map((variant) => (
        <Stack key={variant} spacing={2}>
          <Text fontSize="sm" color="muted-foreground">
            {variant}
          </Text>
          <Boxes variant={variant} />
          <Boxes variant={variant} isInvalid />
          <Boxes variant={variant} isDisabled />
        </Stack>
      ))}
    </Stack>
  ),
};
