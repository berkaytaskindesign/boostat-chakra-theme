import { useMemo, useRef, useState, type ReactNode, type RefObject } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Alert,
  AlertTitle,
  Box,
  Button,
  Drawer,
  DrawerContent,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Icon,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  Modal,
  ModalContent,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Popover,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Stack,
  Step,
  StepIndicator,
  StepNumber,
  StepStatus,
  Stepper,
  Tag,
  TagLabel,
  Text,
} from '@chakra-ui/react';

import {
  AccordionIcon,
  AlertIcon,
  Avatar,
  Checkbox,
  CloseButton,
  DrawerCloseButton,
  FormErrorIcon,
  MenuItemOption,
  ModalCloseButton,
  NumberDecrementStepper,
  NumberIncrementStepper,
  PopoverCloseButton,
  Select,
  StepIcon,
  TagCloseButton,
  useToast,
} from '../../components';
import { Icons, type IconName } from '../../icons';

const names = Object.keys(Icons) as IconName[];
const sizes = ['icon-sm', 'icon-md', 'icon-lg'] as const;

const meta = {
  title: 'Chakra v2/Foundations/Icons',
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gallery: Story = {
  render: () => <IconGallery />,
};

function IconGallery() {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState<IconName | null>(null);
  const visible = useMemo(
    () => names.filter((name) => name.toLowerCase().includes(query.trim().toLowerCase())),
    [query],
  );

  return (
    <Stack spacing={8}>
      <HStack spacing={6}>
        {sizes.map((size) => (
          <Stack key={size} spacing={2} align="center">
            <Icon as={Icons.Close} boxSize={size} />
            <Text fontSize="sm" color="muted-foreground">
              {size}
            </Text>
          </Stack>
        ))}
      </HStack>
      <Input
        placeholder="Search icons"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        maxW="xs"
        aria-label="Search icons"
      />
      <SimpleGrid columns={[2, 4, 6]} spacing={4}>
        {visible.map((name) => (
          <Stack
            key={name}
            as="button"
            type="button"
            spacing={2}
            align="center"
            p={3}
            border="1px solid"
            borderColor="border"
            onClick={() => {
              void navigator.clipboard.writeText(`Icons.${name}`);
              setCopied(name);
            }}
          >
            <Icon as={Icons[name]} boxSize="icon-md" />
            <Text fontSize="xs" color="muted-foreground">
              {copied === name ? 'Copied' : name}
            </Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
}

const alertStatuses = ['info', 'success', 'warning', 'error', 'loading'] as const;

export const BuiltInReplacements: Story = {
  name: 'Built-in icon replacements',
  render: () => <Replacements />,
};

function Replacements() {
  const toast = useToast();

  return (
    <Stack spacing={8} maxW="lg">
      <HStack align="center">
        <CloseButton aria-label="Close" />
        <OverlayHost>
          {(containerRef) => (
            <Modal
              isOpen
              onClose={noop}
              trapFocus={false}
              autoFocus={false}
              blockScrollOnMount={false}
              returnFocusOnClose={false}
              portalProps={{ containerRef }}
            >
              <ModalContent
                containerProps={{ position: 'absolute', inset: 0, w: 'full', h: 'full' }}
                m={0}
                minW={0}
                w="full"
                h="full"
                boxShadow="none"
              >
                <ModalCloseButton position="static" aria-label="Close modal" />
              </ModalContent>
            </Modal>
          )}
        </OverlayHost>
        <OverlayHost>
          {(containerRef) => (
            <Drawer
              isOpen
              onClose={noop}
              trapFocus={false}
              autoFocus={false}
              blockScrollOnMount={false}
              returnFocusOnClose={false}
              portalProps={{ containerRef }}
            >
              <DrawerContent
                containerProps={{ position: 'absolute', inset: 0, w: 'full', h: 'full' }}
                m={0}
                minW={0}
                w="full"
                h="full"
                boxShadow="none"
              >
                <DrawerCloseButton position="static" aria-label="Close drawer" />
              </DrawerContent>
            </Drawer>
          )}
        </OverlayHost>
        <Popover isOpen onClose={noop} closeOnBlur={false}>
          <PopoverTrigger>
            <Button>Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverCloseButton aria-label="Close popover" />
          </PopoverContent>
        </Popover>
      </HStack>
      <Select placeholder="Choose" maxW="xs" aria-label="Example">
        <option value="a">Alpha</option>
      </Select>
      <HStack>
        <Checkbox defaultChecked>Checked</Checkbox>
        <Checkbox isIndeterminate>Indeterminate</Checkbox>
      </HStack>
      <NumberInput defaultValue={2} maxW="xs" aria-label="Quantity">
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <BoxFlex>Section</BoxFlex>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>Details</AccordionPanel>
        </AccordionItem>
      </Accordion>
      {alertStatuses.map((status) => (
        <Alert key={status} status={status}>
          <AlertIcon />
          <AlertTitle textTransform="capitalize">{status}</AlertTitle>
        </Alert>
      ))}
      <FormControl isInvalid>
        <FormLabel>Email</FormLabel>
        <Input defaultValue="not-an-email" />
        <FormErrorMessage>
          <FormErrorIcon />
          Email is invalid.
        </FormErrorMessage>
      </FormControl>
      <HStack>
        <Avatar name="Ada Lovelace" />
        <Avatar />
      </HStack>
      <Tag>
        <TagLabel>Label</TagLabel>
        <TagCloseButton />
      </Tag>
      <Menu defaultIsOpen>
        <MenuButton as={Button}>Options</MenuButton>
        <MenuList>
          <MenuOptionGroup type="checkbox" defaultValue={['email']}>
            <MenuItemOption value="email">Email</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
      <Stepper index={1}>
        <Step>
          <StepIndicator>
            <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
          </StepIndicator>
        </Step>
        <Step>
          <StepIndicator>
            <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
          </StepIndicator>
        </Step>
      </Stepper>
      <Button
        onClick={() =>
          toast({
            title: 'Saved',
            description: 'Your changes are stored.',
            status: 'success',
            isClosable: true,
          })
        }
      >
        Show toast
      </Button>
    </Stack>
  );
}

function noop() {}

function OverlayHost({
  children,
}: {
  children: (containerRef: RefObject<HTMLDivElement | null>) => ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Box ref={containerRef} position="relative" boxSize="10" overflow="hidden" transform="translateZ(0)">
      {children(containerRef)}
    </Box>
  );
}

function BoxFlex({ children }: { children: string }) {
  return (
    <Text as="span" flex="1" textAlign="start">
      {children}
    </Text>
  );
}
