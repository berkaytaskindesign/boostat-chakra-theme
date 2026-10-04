import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, Icon, IconButton, Stack, Text, type IconProps } from '@chakra-ui/react';

function PlusIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 24 24" boxSize="1em" {...props}>
      <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </Icon>
  );
}

const variants = ['solid', 'secondary', 'destructive', 'outline', 'ghost'] as const;
const sizes = ['sm', 'md', 'lg', 'xl'] as const;

const meta = {
  title: 'Chakra v2/Form/Icon Button',
  component: IconButton,
} satisfies Meta<typeof IconButton>;

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
