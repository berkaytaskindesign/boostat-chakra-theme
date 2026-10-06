import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading, Stack, Text } from '@chakra-ui/react';

const sizes = [
  ['xs', 'sans'],
  ['sm', 'sans'],
  ['md', 'serif'],
  ['lg', 'serif'],
  ['xl', 'serif'],
  ['2xl', 'serif'],
  ['3xl', 'serif'],
  ['4xl', 'serif'],
] as const;

const meta = {
  title: 'Chakra v2/Typography/Heading',
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
  render: () => (
    <Stack spacing={8}>
      <Stack spacing={3}>
        {sizes.map(([size, face]) => (
          <Heading key={size} size={size}>
            {size} {face}
          </Heading>
        ))}
      </Stack>
      <Stack spacing={1}>
        <Heading size="lg">Invoices</Heading>
        <Text variant="caption">March</Text>
      </Stack>
    </Stack>
  ),
};
