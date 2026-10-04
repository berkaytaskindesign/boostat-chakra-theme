import { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Portal, Text } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Other/Portal',
  component: Portal,
} satisfies Meta;

export default meta;
type Story = StoryObj;

function PortalDemo() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Box ref={ref} borderWidth="1px" rounded="md" p={4} minH="80px">
      <Text>Host</Text>
      <Portal containerRef={ref}>
        <Text fontWeight="bold">Portaled into the host box</Text>
      </Portal>
    </Box>
  );
}

export const Default: Story = {
  render: () => <PortalDemo />,
};
