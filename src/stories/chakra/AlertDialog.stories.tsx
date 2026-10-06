import { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from '@chakra-ui/react';

import { AlertDialog } from '../../components';

const meta = {
  title: 'Chakra v2/Overlay/Alert Dialog',
  component: AlertDialog,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Destructive: Story = {
  render: () => {
    const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
    const cancelRef = useRef<HTMLButtonElement>(null);

    return (
      <>
        <Button variant="destructive" onClick={onOpen}>
          Delete customer
        </Button>
        <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader>Delete customer</AlertDialogHeader>
              <AlertDialogBody>This removes the customer and cannot be undone.</AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button variant="destructive" onClick={onClose}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    );
  },
};
