import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Overlay/Drawer',
  component: Drawer,
} satisfies Meta;

export default meta;
type Story = StoryObj;

function DrawerDemo() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open drawer</Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create account</DrawerHeader>
          <DrawerBody>Drawer body</DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export const Default: Story = {
  render: () => <DrawerDemo />,
};
