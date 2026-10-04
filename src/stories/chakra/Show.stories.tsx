import type { Meta, StoryObj } from '@storybook/react-vite';
import { Hide, Show, Stack, Text } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Other/Show and Hide',
  component: Show,
} satisfies Meta<typeof Show>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Breakpoints: Story = {
  render: () => (
    <Stack>
      <Show above="sm">
        <Text>Show: visible from the sm breakpoint up</Text>
      </Show>
      <Hide below="md">
        <Text>Hide: hidden below the md breakpoint</Text>
      </Hide>
    </Stack>
  ),
};
