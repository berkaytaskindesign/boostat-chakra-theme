import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Badge,
  HStack,
  Stack,
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import { Checkbox } from '../../components';

const variants = ['simple', 'minimal', 'striped', 'interactive'] as const;
const sizes = ['sm', 'md', 'lg'] as const;

const rows = [
  ['Ada', 'Admin', '25'],
  ['Grace', 'Editor', '18'],
] as const;

const meta = {
  title: 'Chakra v2/Data display/Table',
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <Stack spacing={8}>
      {variants.map((variant) => (
        <Table key={variant} variant={variant}>
          <Thead>
            <Tr>
              <Th>{variant}</Th>
              <Th>Role</Th>
              <Th isNumeric>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            {rows.map(([name, role, amount]) => (
              <Tr key={name}>
                <Td>{name}</Td>
                <Td>{role}</Td>
                <Td isNumeric>{amount}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      ))}
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack spacing={8}>
      {sizes.map((size) => (
        <Table key={size} size={size}>
          <Thead>
            <Tr>
              <Th>{size}</Th>
              <Th isNumeric>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Acme</Td>
              <Td isNumeric>1200</Td>
            </Tr>
          </Tbody>
        </Table>
      ))}
    </Stack>
  ),
};

export const Finance: Story = {
  render: () => (
    <Table>
      <Thead>
        <Tr>
          <Th>
            <HStack>
              <Checkbox aria-label="Select all" />
            </HStack>
          </Th>
          <Th>Client</Th>
          <Th>Status</Th>
          <Th isNumeric>Amount</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            <Checkbox aria-label="Select Acme" />
          </Td>
          <Td>Acme</Td>
          <Td>
            <Badge>Paid</Badge>
          </Td>
          <Td isNumeric>£1,200.00</Td>
        </Tr>
        <Tr>
          <Td>
            <Checkbox aria-label="Select Northwind" />
          </Td>
          <Td>Northwind</Td>
          <Td>
            <Badge variant="outline">Draft</Badge>
          </Td>
          <Td isNumeric>£860.00</Td>
        </Tr>
      </Tbody>
      <Tfoot>
        <Tr>
          <Th />
          <Th>Total</Th>
          <Th />
          <Th isNumeric>£2,060.00</Th>
        </Tr>
      </Tfoot>
      <TableCaption>Open invoices this month</TableCaption>
    </Table>
  ),
};
