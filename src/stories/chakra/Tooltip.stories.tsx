import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Tooltip } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Overlay/Tooltip',
  component: Tooltip,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Tooltip label="Hello" hasArrow>
      <Button>Hover me</Button>
    </Tooltip>
  ),
};
