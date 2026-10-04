import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, VisuallyHidden } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Disclosure/Visually Hidden',
  component: VisuallyHidden,
} satisfies Meta<typeof VisuallyHidden>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Button>
      Save
      <VisuallyHidden> document</VisuallyHidden>
    </Button>
  ),
};
