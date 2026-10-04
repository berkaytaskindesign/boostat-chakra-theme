import type { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CloseButton, DarkMode, HStack, LightMode, Stack, Text } from '@chakra-ui/react';

const sizes = ['sm', 'md', 'lg'] as const;
const modes = ['light', 'dark'] as const;

const meta = {
  title: 'Chakra v2/Other/Close Button',
  component: CloseButton,
} satisfies Meta<typeof CloseButton>;

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
          <HStack spacing={3}>
            {sizes.map((size) => (
              <CloseButton key={size} size={size} aria-label={size} />
            ))}
          </HStack>
          <HStack spacing={3}>
            <CloseButton aria-label="Default" />
            <CloseButton aria-label="Hover" data-hover />
            <CloseButton aria-label="Active" data-active />
            <CloseButton aria-label="Focus" data-focus-visible />
            <CloseButton aria-label="Disabled" isDisabled />
          </HStack>
        </ModeColumn>
      ))}
    </HStack>
  ),
};
