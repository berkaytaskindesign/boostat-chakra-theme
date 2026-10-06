import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, Stat, StatGroup, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';

import { StatArrow } from '../../components';

const sizes = ['sm', 'md', 'lg'] as const;

const meta = {
  title: 'Chakra v2/Data display/Stat',
  component: Stat,
} satisfies Meta<typeof Stat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
  render: () => (
    <Stack spacing={6}>
      {sizes.map((size) => (
        <Stat key={size} size={size}>
          <StatLabel>Revenue</StatLabel>
          <StatNumber>£24,580</StatNumber>
        </Stat>
      ))}
    </Stack>
  ),
};

export const Arrows: Story = {
  render: () => (
    <Stack spacing={6}>
      <Stat>
        <StatLabel>Collected fees</StatLabel>
        <StatNumber>£1,280</StatNumber>
        <StatHelpText>
          <StatArrow type="increase" />
          23.36%
        </StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Refunds</StatLabel>
        <StatNumber>£140</StatNumber>
        <StatHelpText>
          <StatArrow type="decrease" />
          4.10%
        </StatHelpText>
      </Stat>
    </Stack>
  ),
};

export const Group: Story = {
  render: () => (
    <StatGroup gap="24px" justifyContent="flex-start">
      <Stat>
        <StatLabel>Revenue</StatLabel>
        <StatNumber>£24,580</StatNumber>
        <StatHelpText>
          <StatArrow type="increase" />
          12%
        </StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Expenses</StatLabel>
        <StatNumber>£8,140</StatNumber>
        <StatHelpText>
          <StatArrow type="decrease" />
          3%
        </StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Profit</StatLabel>
        <StatNumber>£16,440</StatNumber>
        <StatHelpText>
          <StatArrow type="increase" />
          9%
        </StatHelpText>
      </Stat>
    </StatGroup>
  ),
};
