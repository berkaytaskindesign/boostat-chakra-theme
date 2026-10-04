import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, HStack, Icon, IconButton, Stack, Text, type IconProps } from '@chakra-ui/react';

function PlusIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 24 24" boxSize="1em" {...props}>
      <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </Icon>
  );
}

const variants = ['solid', 'secondary', 'destructive', 'outline', 'ghost', 'link'] as const;
const sizes = ['sm', 'md', 'lg', 'xl'] as const;

const meta = {
  title: 'Chakra v2/Form/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VariantsAndSizes: Story = {
  name: 'Variants and sizes',
  render: () => (
    <Stack spacing={4}>
      {variants.map((variant) => (
        <HStack key={variant} spacing={3} align="center">
          <Text w="28" fontSize="sm" color="muted-foreground">
            {variant}
          </Text>
          {sizes.map((size) => (
            <Button key={size} variant={variant} size={size}>
              {size}
            </Button>
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
        <HStack key={variant} spacing={3} align="center">
          <Text w="28" fontSize="sm" color="muted-foreground">
            {variant}
          </Text>
          <Button variant={variant}>Default</Button>
          <Button variant={variant} data-hover>
            Hover
          </Button>
          <Button variant={variant} data-active>
            Active
          </Button>
          <Button variant={variant} data-focus-visible>
            Focus
          </Button>
          <Button variant={variant} isDisabled>
            Disabled
          </Button>
          <Button variant={variant} isLoading>
            Loading
          </Button>
        </HStack>
      ))}
    </Stack>
  ),
};

export const Icons: Story = {
  render: () => (
    <Stack spacing={6}>
      <HStack spacing={3}>
        <Button leftIcon={<PlusIcon />}>Left</Button>
        <Button rightIcon={<PlusIcon />}>Right</Button>
      </HStack>
      {variants.map((variant) => (
        <HStack key={variant} spacing={3} align="center">
          <Text w="28" fontSize="sm" color="muted-foreground">
            {variant}
          </Text>
          {sizes.map((size) => (
            <IconButton
              key={size}
              aria-label={`${variant} ${size}`}
              icon={<PlusIcon />}
              variant={variant}
              size={size}
            />
          ))}
        </HStack>
      ))}
    </Stack>
  ),
};

export const LegacyColorScheme: Story = {
  name: 'Legacy colorScheme',
  render: () => (
    <HStack spacing={3}>
      <Button colorScheme="blue">Blue</Button>
      <Button colorScheme="green">Green</Button>
      <Button colorScheme="red">Red</Button>
    </HStack>
  ),
};
