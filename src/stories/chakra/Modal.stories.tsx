import type { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { ModalCloseButton } from '../../components';

const sizes = ['sm', 'md', 'lg', 'xl', 'full'] as const;

const meta = {
  title: 'Chakra v2/Overlay/Modal',
  component: Modal,
} satisfies Meta;

export default meta;
type Story = StoryObj;

function Frame({
  label,
  size,
  title,
  defaultOpen = false,
  children,
}: {
  label: string;
  size?: (typeof sizes)[number];
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: defaultOpen });

  return (
    <>
      <Button onClick={onOpen}>{label}</Button>
      <Modal isOpen={isOpen} onClose={onClose} size={size} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={onClose}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export const Sizes: Story = {
  render: () => (
    <HStack spacing={3} wrap="wrap">
      {sizes.map((size) => (
        <Frame key={size} label={size} size={size} title={`Modal ${size}`}>
          <Text>Width follows the {size} size, up to 90vw.</Text>
        </Frame>
      ))}
    </HStack>
  ),
};

export const Form: Story = {
  render: () => (
    <Frame label="Edit customer" title="Edit customer" defaultOpen>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input defaultValue="Acme Studio" />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input defaultValue="hello@acme.test" />
        </FormControl>
      </Stack>
    </Frame>
  ),
};

export const LongContent: Story = {
  name: 'Long content',
  render: () => (
    <Frame
      label="Open long modal"
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
