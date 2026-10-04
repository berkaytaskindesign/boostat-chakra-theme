import type { Meta, StoryObj } from '@storybook/react-vite';
import { Image } from '@chakra-ui/react';

import viteLogo from '../../assets/vite.svg';

const meta = {
  title: 'Chakra v2/Media and icons/Image',
  component: Image,
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: viteLogo,
    alt: 'Vite logo',
    boxSize: '64px',
  },
};
