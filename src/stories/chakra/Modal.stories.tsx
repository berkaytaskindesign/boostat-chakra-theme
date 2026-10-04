import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Overlay/Modal',
  component: Modal,
} satisfies Meta;

export default meta;
type Story = StoryObj;

function ModalDemo() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Modal body</ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export const Default: Story = {
  render: () => <ModalDemo />,
};
