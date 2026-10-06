import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, HStack, IconButton, Tooltip } from '@chakra-ui/react';

import { Icons } from '../../icons';
import { DecorativeIcon } from '../../components/decorativeIcon';

const placements = ['top', 'right', 'bottom', 'left'] as const;

const meta = {
  title: 'Chakra v2/Overlay/Tooltip',
  component: Tooltip,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Placements: Story = {
  render: () => (
    <HStack spacing={24} pt={12} pb={12}>
      {placements.map((placement) => (
        <Tooltip key={placement} label={placement} placement={placement} hasArrow isOpen>
          <Button>{placement}</Button>
        </Tooltip>
      ))}
    </HStack>
  ),
};

export const WithArrow: Story = {
  name: 'With arrow',
  render: () => (
    <Tooltip label="Copy link" hasArrow isOpen>
      <Button>Copy</Button>
    </Tooltip>
  ),
};

export const OnIconButton: Story = {
  name: 'On icon button',
  render: () => (
    <Tooltip label="Settings" hasArrow isOpen>
      <IconButton aria-label="Settings" icon={<DecorativeIcon as={Icons.Tune} />} />
    </Tooltip>
  ),
};

export const LongText: Story = {
  name: 'Long text',
  render: () => (
    <Tooltip
      label="Invoices from this month that are still open, including drafts waiting on a client."
      hasArrow
      isOpen
    >
      <Button>Open invoices</Button>
    </Tooltip>
  ),
};
