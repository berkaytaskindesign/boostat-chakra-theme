import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Button, Collapse, Fade, ScaleFade, SlideFade, Stack, useDisclosure } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Other/Transitions',
  component: Fade,
} satisfies Meta<typeof Fade>;

export default meta;
type Story = StoryObj<typeof meta>;

function TransitionDemo() {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });

  return (
    <Stack align="start">
      <Button onClick={onToggle}>{isOpen ? 'Hide' : 'Show'}</Button>
      <Fade in={isOpen}>
        <Box p="4" bg="teal.500" color="white" rounded="md">
          Fade
        </Box>
      </Fade>
      <ScaleFade in={isOpen} initialScale={0.9}>
        <Box p="4" bg="blue.500" color="white" rounded="md">
          Scale
        </Box>
      </ScaleFade>
      <SlideFade in={isOpen} offsetY="20px">
        <Box p="4" bg="purple.500" color="white" rounded="md">
          Slide
        </Box>
      </SlideFade>
      <Collapse in={isOpen}>
        <Box p="4" bg="orange.500" color="white" rounded="md">
          Collapse
        </Box>
      </Collapse>
    </Stack>
  );
}

export const Default: Story = {
  render: () => <TransitionDemo />,
};
