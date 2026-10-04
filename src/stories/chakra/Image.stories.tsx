import type { Meta, StoryObj } from '@storybook/react-vite';
import { Image } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Media and icons/Image',
  component: Image,
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://bit.ly/dan-abramov',
    alt: 'Dan Abramov',
    boxSize: '64px',
  },
};
