import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Data display/Stat',
  component: Stat,
} satisfies Meta<typeof Stat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Stat>
      <StatLabel>Collected fees</StatLabel>
      <StatNumber>£0.00</StatNumber>
      <StatHelpText>
        <StatArrow type="increase" />
        23.36%
      </StatHelpText>
    </Stat>
  ),
};
