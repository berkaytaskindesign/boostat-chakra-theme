import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Badge,
  Button,
  Heading,
  HStack,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

const variants = ['subtle', 'solid', 'outline', 'destructive'] as const;

const meta = {
  title: 'Chakra v2/Data display/Badge',
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <HStack spacing={3}>
      {variants.map((variant) => (
        <Badge key={variant} variant={variant}>
          {variant}
        </Badge>
      ))}
    </HStack>
  ),
};

export const InContext: Story = {
  render: () => (
    <Stack spacing={6} align="start">
      <HStack spacing={3}>
        <Heading size="md">Invoices</Heading>
        <Badge>12</Badge>
      </HStack>
      <Table>
        <Thead>
          <Tr>
            <Th>Client</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Acme</Td>
            <Td>
              <Badge>Paid</Badge>
            </Td>
          </Tr>
          <Tr>
            <Td>Northwind</Td>
            <Td>
              <Badge variant="outline">Draft</Badge>
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <HStack h="36px" px={3} spacing={3} border="1px solid" borderColor="border" align="center">
        <Text>Send invoice</Text>
        <Badge variant="solid">Ready</Badge>
        <Button size="md">Send</Button>
      </HStack>
    </Stack>
  ),
};
