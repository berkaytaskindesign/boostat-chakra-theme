import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Button,
  Collapse,
  Fade,
  HStack,
  ScaleFade,
  SlideFade,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import type { ReactNode } from 'react';

const meta = {
  title: 'Chakra v2/Other/Transitions',
  component: Fade,
} satisfies Meta<typeof Fade>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default solid `md` is 36px tall. A shared width keeps every label the same size. */
const sampleButton = {
  size: 'md' as const,
  variant: 'solid' as const,
  w: '120px',
};

function DemoButton({ children, onClick }: { children: ReactNode; onClick?: () => void }) {
  return (
    <Button {...sampleButton} onClick={onClick}>
      {children}
    </Button>
  );
}

function TransitionRow({ render }: { render: (isOpen: boolean) => ReactNode }) {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });

  return (
    <HStack align="center" spacing={3}>
      <DemoButton onClick={onToggle}>{isOpen ? 'Hide' : 'Show'}</DemoButton>
      {render(isOpen)}
    </HStack>
  );
}

function TransitionDemo() {
  return (
    <Stack align="start" spacing={4}>
      <TransitionRow
        render={(isOpen) => (
          <Fade in={isOpen}>
            <DemoButton>Fade</DemoButton>
          </Fade>
        )}
      />
      <TransitionRow
        render={(isOpen) => (
          <ScaleFade in={isOpen} initialScale={0.9}>
            <DemoButton>Scale</DemoButton>
          </ScaleFade>
        )}
      />
      <TransitionRow
        render={(isOpen) => (
          <SlideFade in={isOpen} offsetY="20px">
            <DemoButton>Slide</DemoButton>
          </SlideFade>
        )}
      />
      <TransitionRow
        render={(isOpen) => (
          <Collapse in={isOpen}>
            <DemoButton>Collapse</DemoButton>
          </Collapse>
        )}
      />
    </Stack>
  );
}

export const Default: Story = {
  render: () => <TransitionDemo />,
};
