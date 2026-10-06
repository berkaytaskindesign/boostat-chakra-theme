import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Stack,
} from '@chakra-ui/react';

import { PopoverCloseButton } from '../../components';

const meta = {
  title: 'Chakra v2/Overlay/Popover',
  component: Popover,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Popover defaultIsOpen placement="bottom-start">
      <PopoverTrigger>
        <Button>Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Invite</PopoverHeader>
        <PopoverBody>Send a link to this workspace.</PopoverBody>
        <PopoverFooter>
          <Button size="sm">Copy link</Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  ),
};

export const Form: Story = {
  render: () => (
    <Popover defaultIsOpen placement="bottom-start">
      <PopoverTrigger>
        <Button>Edit name</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>Display name</PopoverHeader>
        <PopoverBody>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input defaultValue="Acme Studio" />
          </FormControl>
        </PopoverBody>
        <PopoverFooter>
          <Stack direction="row" justify="flex-end">
            <Button size="sm">Save</Button>
          </Stack>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  ),
};
