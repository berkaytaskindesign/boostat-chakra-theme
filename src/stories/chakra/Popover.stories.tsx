import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react';

import { PopoverCloseButton } from '../../components';

const meta = {
  title: 'Chakra v2/Overlay/Popover',
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger>
        <Button>Trigger</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Confirmation</PopoverHeader>
        <PopoverBody>Are you sure you want to continue?</PopoverBody>
      </PopoverContent>
    </Popover>
  ),
};
