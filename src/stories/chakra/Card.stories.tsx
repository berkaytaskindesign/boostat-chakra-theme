import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

const variants = ['outline', 'elevated', 'filled', 'unstyled'] as const;
const sizes = ['sm', 'md', 'lg'] as const;

const meta = {
  title: 'Chakra v2/Data display/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VariantsAndSizes: Story = {
  render: () => (
    <Stack spacing={8}>
      {variants.map((variant) => (
        <SimpleGrid key={variant} columns={[1, 3]} spacing={4}>
          {sizes.map((size) => (
            <Card key={size} variant={variant} size={size}>
              <CardHeader>
                <Heading size="sm">
                  {variant} {size}
                </Heading>
              </CardHeader>
              <CardBody>
                <Text>Flat surface, no shadow.</Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      ))}
    </Stack>
  ),
};

export const HeaderBodyFooter: Story = {
  render: () => (
    <Card maxW="sm">
      <CardHeader>
        <Heading size="md">Customer</Heading>
        <Text fontSize="sm" color="muted-foreground">
          Last 30 days
        </Text>
      </CardHeader>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
      <CardFooter>
        <Button>View here</Button>
      </CardFooter>
    </Card>
  ),
};

export const Kpi: Story = {
  render: () => (
    <Card maxW="xs">
      <CardBody>
        <Stat>
          <StatLabel>Revenue</StatLabel>
          <StatNumber>£24,580</StatNumber>
        </Stat>
      </CardBody>
    </Card>
  ),
};

export const WithTable: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <Heading size="md">Invoices</Heading>
      </CardHeader>
      <CardBody>
        <Table variant="minimal">
          <Thead>
            <Tr>
              <Th>Client</Th>
              <Th isNumeric>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Acme</Td>
              <Td isNumeric>£1,200</Td>
            </Tr>
            <Tr>
              <Td>Northwind</Td>
              <Td isNumeric>£860</Td>
            </Tr>
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  ),
};
