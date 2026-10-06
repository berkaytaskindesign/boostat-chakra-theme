import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading, Stack, Text } from '@chakra-ui/react';

const headingSizes = [
  ['xs', '14px', 'sans'],
  ['sm', '16px', 'sans'],
  ['md', '20px', 'serif'],
  ['lg', '24px', 'serif'],
  ['xl', '30px', 'serif'],
  ['2xl', '36px', 'serif'],
  ['3xl', '48px', 'serif'],
  ['4xl', '60px', 'serif'],
] as const;
const textVariants = ['body', 'body-lg', 'caption', 'label', 'muted'] as const;

const meta = {
  title: 'Chakra v2/Typography/Overview',
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <Stack spacing={10}>
      <Stack spacing={2}>
        <Text variant="caption">body default</Text>
        <Text>The quick brown fox jumps over the lazy dog.</Text>
      </Stack>
      <Stack spacing={3}>
        <Text variant="caption">headings</Text>
        {headingSizes.map(([size, px, face]) => (
          <Heading key={size} size={size}>
            {size} {px} {face}
          </Heading>
        ))}
      </Stack>
      <Stack spacing={2}>
        <Text variant="caption">text styles</Text>
        {textVariants.map((variant) => (
          <Text key={variant} variant={variant}>
            {variant}
          </Text>
        ))}
      </Stack>
      <Stack spacing={2}>
        <Text variant="caption">weight</Text>
        <Text fontFamily="body" fontSize="2xl" fontWeight="normal">
          normal 400
        </Text>
      </Stack>
    </Stack>
  ),
};
