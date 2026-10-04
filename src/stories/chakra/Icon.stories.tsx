import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, Icon } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Media and icons/Icon',
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <HStack>
      <Icon viewBox="0 0 24 24" boxSize={6}>
        <path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
      </Icon>
      <Icon viewBox="0 0 200 200" color="red.500" boxSize={8}>
        <path
          fill="currentColor"
          d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
        />
      </Icon>
    </HStack>
  ),
};
