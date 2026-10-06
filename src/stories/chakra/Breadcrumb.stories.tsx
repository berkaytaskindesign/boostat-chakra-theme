import type { Meta, StoryObj } from '@storybook/react-vite';
import { BreadcrumbItem, BreadcrumbLink, Heading, Stack, Text } from '@chakra-ui/react';

import { Breadcrumb } from '../../components';

const meta = {
  title: 'Chakra v2/Navigation/Breadcrumb',
  component: Breadcrumb,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Levels: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Customers</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Invoices</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>March</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const CustomSeparator: Story = {
  name: 'Custom separator',
  render: () => (
    <Breadcrumb separator={<Text fontSize="sm">/</Text>}>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Customers</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>Acme</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const PageHeader: Story = {
  name: 'Page header',
  render: () => (
    <Stack spacing={2} align="start">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Customers</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Invoices</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Heading size="lg">Invoices</Heading>
    </Stack>
  ),
};
