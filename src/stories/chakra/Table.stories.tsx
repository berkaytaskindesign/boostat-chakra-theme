import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Data display/Table',
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: () => (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Role</Th>
            <Th isNumeric>Amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Ada</Td>
            <Td>Admin</Td>
            <Td isNumeric>25</Td>
          </Tr>
          <Tr>
            <Td>Grace</Td>
            <Td>Editor</Td>
            <Td isNumeric>10</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  ),
};

export const Striped: Story = {
  render: () => (
    <TableContainer>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Role</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Ada</Td>
            <Td>Admin</Td>
          </Tr>
          <Tr>
            <Td>Grace</Td>
            <Td>Editor</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  ),
};
