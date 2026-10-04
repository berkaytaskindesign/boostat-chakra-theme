import type { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DarkMode, HStack, LightMode, Link, Stack, Text } from '@chakra-ui/react';

const modes = ['light', 'dark'] as const;
const textSizes = ['sm', 'md'] as const;

const meta = {
  title: 'Chakra v2/Navigation/Link',
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

function ModeColumn({ mode, children }: { mode: 'light' | 'dark'; children: ReactNode }) {
  const Mode = mode === 'dark' ? DarkMode : LightMode;

  return (
    <Mode>
      <Stack data-theme={mode} bg="background" color="foreground" p={4} spacing={4} align="start">
        <Text fontSize="sm" color="muted-foreground">
          {mode}
        </Text>
        {children}
      </Stack>
    </Mode>
  );
}

export const SizesAndStates: Story = {
  name: 'Sizes and states',
  render: () => (
    <HStack align="start" spacing={6}>
      {modes.map((mode) => (
        <ModeColumn key={mode} mode={mode}>
          {textSizes.map((size) => (
            <Text key={size} fontSize={size}>
              Read the <Link href="#">documentation</Link> for details.
            </Text>
          ))}
          <Text fontSize="sm">
            <Link href="#">Default</Link>
          </Text>
          <Text fontSize="sm">
            <Link href="#" data-hover>
              Hover
            </Link>
          </Text>
          <Text fontSize="sm">
            <Link href="#" data-focus-visible>
              Focus
            </Link>
          </Text>
          <Text fontSize="sm" color="muted-foreground">
            <Link href="#" color="currentColor">
              Muted
            </Link>
          </Text>
          <Text fontSize="sm">
            <Link href="#" aria-disabled>
              Disabled
            </Link>
          </Text>
        </ModeColumn>
      ))}
    </HStack>
  ),
};
