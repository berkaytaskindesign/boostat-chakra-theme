import type { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  useDisclosure,
  type DrawerProps,
} from '@chakra-ui/react';

import { DrawerCloseButton } from '../../components';

const sizes = ['sm', 'md', 'lg', 'full'] as const;

const meta = {
  title: 'Chakra v2/Overlay/Drawer',
  component: Drawer,
} satisfies Meta;

export default meta;
type Story = StoryObj;

function Frame({
  label,
  placement = 'right',
  size = 'md',
  title,
  defaultOpen = false,
  children,
}: {
  label: string;
  placement?: DrawerProps['placement'];
  size?: (typeof sizes)[number];
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: defaultOpen });

  return (
    <>
      <Button onClick={onOpen}>{label}</Button>
      <Drawer isOpen={isOpen} placement={placement} onClose={onClose} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{title}</DrawerHeader>
          <DrawerBody>{children}</DrawerBody>
          <DrawerFooter>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={onClose}>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export const Right: Story = {
  render: () => (
    <Frame label="Open drawer" title="Create account" defaultOpen>
      <Text>From md up, this panel sits 16px in from the viewport. Below that it meets the edges.</Text>
    </Frame>
  ),
};

export const Left: Story = {
  render: () => (
    <Frame label="Open left drawer" placement="left" title="Filters" defaultOpen>
      <Text>Same panel, attached to the left.</Text>
    </Frame>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack spacing={3} align="start">
      {sizes.map((size) => (
        <Frame key={size} label={size} size={size} title={`Drawer ${size}`}>
          <Text>Width follows the {size} size.</Text>
        </Frame>
      ))}
    </Stack>
  ),
};

export const Form: Story = {
  render: () => (
    <Frame label="New invoice" title="New invoice" defaultOpen>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Client</FormLabel>
          <Input defaultValue="Acme Studio" />
        </FormControl>
        <FormControl>
          <FormLabel>Amount</FormLabel>
          <Input defaultValue="1200" />
        </FormControl>
      </Stack>
    </Frame>
  ),
};

export const LongContent: Story = {
  name: 'Long content',
  render: () => (
    <Frame
      label="Open long drawer"
      title="A title long enough that it must stop before the close button"
      defaultOpen
    >
      <Stack spacing={4}>
        {Array.from({ length: 24 }, (_, index) => (
          <Text key={index}>
            Paragraph {index + 1}. The header and the footer stay in place. Only this body scrolls.
          </Text>
        ))}
      </Stack>
    </Frame>
  ),
};
