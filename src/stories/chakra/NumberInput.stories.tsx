import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Text,
} from '@chakra-ui/react';

const variants = ['outline', 'filled', 'flushed'] as const;
const sizes = ['sm', 'md', 'lg', 'xl'] as const;

const meta = {
  title: 'Chakra v2/Form/Number Input',
  component: NumberInput,
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

function Field({
  variant = 'outline',
  size = 'md',
  focus = false,
  ...props
}: {
  variant?: (typeof variants)[number];
  size?: (typeof sizes)[number];
  focus?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
}) {
  return (
    <NumberInput variant={variant} size={size} defaultValue={15} min={0} max={50} maxW="36" {...props}>
      <NumberInputField {...(focus ? { 'data-focus-visible': true } : {})} />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
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
            <Field key={size} variant={variant} size={size} />
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
          <Field variant={variant} />
          <Field variant={variant} focus />
          <Field variant={variant} isInvalid />
          <Field variant={variant} isDisabled />
          <Field variant={variant} isReadOnly focus />
        </Stack>
      ))}
    </Stack>
  ),
};
