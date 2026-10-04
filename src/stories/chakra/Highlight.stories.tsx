import type { Meta, StoryObj } from '@storybook/react-vite';
import { Highlight } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Typography/Highlight',
  component: Highlight,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Highlight query={['Chakra', 'v2']} styles={{ px: '1', py: '1', rounded: 'full', bg: 'teal.100' }}>
      Chakra UI v2 components
    </Highlight>
  ),
};
