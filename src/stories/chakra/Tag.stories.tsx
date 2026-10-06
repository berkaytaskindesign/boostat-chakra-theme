import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Button,
  Heading,
  HStack,
  Icon,
  Stack,
  Table,
  Tag,
  TagLabel,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import { TagCloseButton } from '../../components';
import { Icons } from '../../icons';

const variants = ['subtle', 'outline', 'destructive'] as const;
const sizes = ['xs', 'sm', 'md', 'lg'] as const;

const meta = {
  title: 'Chakra v2/Data display/Tag',
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VariantsAndSizes: Story = {
  render: () => (
    <Stack spacing={4} align="start">
      {variants.map((variant) => (
        <HStack key={variant} spacing={3}>
          {sizes.map((size) => (
            <Tag key={size} variant={variant} size={size}>
              <TagLabel>
                {variant} {size}
              </TagLabel>
            </Tag>
          ))}
        </HStack>
      ))}
    </Stack>
  ),
};

export const WithIconAndClose: Story = {
  render: () => (
    <HStack spacing={3}>
      <Tag>
        <Icon as={Icons.Tag} boxSize="icon-sm" marginEnd="4px" aria-hidden />
        <TagLabel>Design</TagLabel>
        <TagCloseButton aria-label="Remove Design" />
      </Tag>
      <Tag variant="outline" size="lg">
        <Icon as={Icons.Add} boxSize="icon-sm" marginEnd="4px" aria-hidden />
        <TagLabel>Add label</TagLabel>
      </Tag>
      <Tag variant="destructive" size="sm">
        <TagLabel>Overdue</TagLabel>
        <TagCloseButton aria-label="Remove Overdue" />
      </Tag>
    </HStack>
  ),
};

export const InContext: Story = {
  render: () => (
    <Stack spacing={6} align="start">
      <HStack spacing={3}>
        <Heading size="md">Invoices</Heading>
        <Tag size="xs">
          <TagLabel>12</TagLabel>
        </Tag>
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
              <Tag size="xs">
                <TagLabel>Paid</TagLabel>
              </Tag>
            </Td>
          </Tr>
          <Tr>
            <Td>Northwind</Td>
            <Td>
              <Tag size="xs" variant="outline">
                <TagLabel>Draft</TagLabel>
              </Tag>
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <HStack h="36px" px={3} spacing={3} border="1px solid" borderColor="border" align="center">
        <Text>Send invoice</Text>
        <Tag size="xs" variant="outline">
          <TagLabel>Ready</TagLabel>
        </Tag>
        <Button size="md">Send</Button>
      </HStack>
    </Stack>
  ),
};
