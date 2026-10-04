import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading, Stack } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Typography/Heading',
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
  render: () => (
    <Stack>
      <Heading as="h1" size="2xl">
        Heading 2xl
      </Heading>
      <Heading as="h2" size="xl">
        Heading xl
      </Heading>
      <Heading as="h3" size="lg">
        Heading lg
      </Heading>
      <Heading size="md">Heading md</Heading>
      <Heading size="sm">Heading sm</Heading>
    </Stack>
  ),
};
