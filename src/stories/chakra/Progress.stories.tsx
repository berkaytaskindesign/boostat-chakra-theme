import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress, ProgressLabel, Stack, Text } from '@chakra-ui/react';

const sizes = ['xs', 'sm', 'md', 'lg'] as const;

const meta = {
  title: 'Chakra v2/Feedback/Progress',
  component: Progress,
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
  render: () => (
    <Stack spacing={4}>
      {sizes.map((size) => (
        <Stack key={size} spacing={1}>
          <Text fontSize="xs" color="muted-foreground">
            {size}
          </Text>
          <Progress size={size} value={40} />
        </Stack>
      ))}
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack spacing={4}>
      <Stack spacing={1}>
        <Text fontSize="xs" color="muted-foreground">
          empty
        </Text>
        <Progress value={0} />
      </Stack>
      <Stack spacing={1}>
        <Text fontSize="xs" color="muted-foreground">
          complete
        </Text>
        <Progress value={100}>
          <ProgressLabel>100%</ProgressLabel>
        </Progress>
      </Stack>
      <Stack spacing={1}>
        <Text fontSize="xs" color="muted-foreground">
          striped
        </Text>
        <Progress value={60} hasStripe />
      </Stack>
      <Stack spacing={1}>
        <Text fontSize="xs" color="muted-foreground">
          indeterminate
        </Text>
        <Progress isIndeterminate />
      </Stack>
    </Stack>
  ),
};
