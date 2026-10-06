import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Stack, Stat, StatLabel, StatNumber, Text } from '@chakra-ui/react';

const variants = ['body', 'body-lg', 'caption', 'label', 'muted'] as const;

const meta = {
  title: 'Chakra v2/Typography/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <Stack spacing={6} align="start">
      {variants.map((variant) => (
        <Text key={variant} variant={variant}>
          {variant}
        </Text>
      ))}
      <Button>
        <Text>Save</Text>
      </Button>
      <Stat>
        <StatLabel>Revenue</StatLabel>
        <StatNumber>
          <Text>1,240</Text>
        </StatNumber>
      </Stat>
    </Stack>
  ),
};
