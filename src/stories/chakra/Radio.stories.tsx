import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Form/Radio',
  component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

function RadioDemo() {
  const [value, setValue] = useState('1');

  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack>
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
      </Stack>
    </RadioGroup>
  );
}

export const Default: Story = {
  render: () => <RadioDemo />,
};
