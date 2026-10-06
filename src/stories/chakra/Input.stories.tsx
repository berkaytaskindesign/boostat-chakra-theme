import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Button,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  Stack,
  Text,
  type IconProps,
} from '@chakra-ui/react';

function PlusIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 24 24" boxSize="1em" {...props}>
      <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </Icon>
  );
}

const variants = ['outline', 'filled', 'flushed'] as const;
const sizes = ['sm', 'md', 'lg', 'xl'] as const;

const meta = {
  title: 'Chakra v2/Form/Input',
  component: Input,
} satisfies Meta<typeof Input>;

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
            <Input key={size} variant={variant} size={size} placeholder={size} maxW="28" />
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
          <Input variant={variant} placeholder="Default" />
          <Input variant={variant} placeholder="Invalid" isInvalid defaultValue="Invalid" />
          <Input variant={variant} placeholder="Disabled" isDisabled />
          <Input variant={variant} placeholder="Read only" isReadOnly defaultValue="Read only" />
        </Stack>
      ))}
    </Stack>
  ),
};

export const Addons: Story = {
  render: () => (
    <Stack spacing={3} maxW="xs">
      <InputGroup>
        <InputLeftAddon>https://</InputLeftAddon>
        <Input placeholder="mysite" />
      </InputGroup>
      <InputGroup>
        <Input placeholder="mysite" />
        <InputRightAddon>.com</InputRightAddon>
      </InputGroup>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <PlusIcon />
        </InputLeftElement>
        <Input placeholder="Left" />
      </InputGroup>
      <InputGroup>
        <Input placeholder="Right" />
        <InputRightElement pointerEvents="none">
          <PlusIcon />
        </InputRightElement>
      </InputGroup>
    </Stack>
  ),
};

export const FormRow: Story = {
  name: 'Form row',
  render: () => (
    <Stack spacing={3} maxW="sm">
      {sizes.map((size) => (
        <HStack key={size} spacing={3}>
          <Input size={size} placeholder={size} />
          <Button size={size}>Save</Button>
        </HStack>
      ))}
    </Stack>
  ),
};
