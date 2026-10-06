import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';

import { Icons } from '../../icons';

const meta = {
  title: 'Chakra v2/Disclosure/Tabs',
  component: Tabs,
} satisfies Meta;

export default meta;
type Story = StoryObj;

function Panels({ label }: { label: string }) {
  return (
    <TabPanels>
      <TabPanel>
        <Text>{label}: first panel</Text>
      </TabPanel>
      <TabPanel>
        <Text>{label}: second panel</Text>
      </TabPanel>
      <TabPanel>
        <Text>{label}: third panel</Text>
      </TabPanel>
    </TabPanels>
  );
}

export const Segmented: Story = {
  render: () => (
    <Tabs>
      <TabList>
        <Tab>Invoices</Tab>
        <Tab>Customers</Tab>
        <Tab>Drafts</Tab>
      </TabList>
      <Panels label="Segmented" />
    </Tabs>
  ),
};

export const Line: Story = {
  render: () => (
    <Tabs variant="line">
      <TabList>
        <Tab>Invoices</Tab>
        <Tab>Customers</Tab>
        <Tab>Drafts</Tab>
      </TabList>
      <Panels label="Line" />
    </Tabs>
  ),
};

export const Enclosed: Story = {
  render: () => (
    <Stack spacing={8}>
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Invoices</Tab>
          <Tab>Customers</Tab>
          <Tab>Drafts</Tab>
        </TabList>
        <Panels label="Enclosed" />
      </Tabs>
      <Tabs variant="enclosed-colored">
        <TabList>
          <Tab>Invoices</Tab>
          <Tab>Customers</Tab>
          <Tab>Drafts</Tab>
        </TabList>
        <Panels label="Enclosed colored" />
      </Tabs>
    </Stack>
  ),
};

export const Fitted: Story = {
  render: () => (
    <Tabs isFitted>
      <TabList>
        <Tab>Invoices</Tab>
        <Tab>Customers</Tab>
        <Tab>Drafts</Tab>
      </TabList>
      <Panels label="Fitted" />
    </Tabs>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Tabs>
      <TabList>
        <Tab>Invoices</Tab>
        <Tab isDisabled>Customers</Tab>
        <Tab>Drafts</Tab>
      </TabList>
      <Panels label="Disabled" />
    </Tabs>
  ),
};

export const WithIcons: Story = {
  name: 'With icons',
  render: () => (
    <Tabs>
      <TabList>
        <Tab>
          <Icon as={Icons.Document} boxSize="16px" mr="8px" />
          Invoices
        </Tab>
        <Tab>
          <Icon as={Icons.AccountCircle} boxSize="16px" mr="8px" />
          Customers
        </Tab>
        <Tab>
          <Icon as={Icons.List} boxSize="16px" mr="8px" />
          Drafts
        </Tab>
      </TabList>
      <Panels label="Icons" />
    </Tabs>
  ),
};

export const VerticalLine: Story = {
  name: 'Vertical line',
  render: () => (
    <Tabs variant="line" orientation="vertical">
      <TabList>
        <Tab>Invoices</Tab>
        <Tab>Customers</Tab>
        <Tab>Drafts</Tab>
      </TabList>
      <Panels label="Vertical line" />
    </Tabs>
  ),
};

export const VerticalSegmented: Story = {
  name: 'Vertical segmented',
  render: () => (
    <Tabs orientation="vertical" w="240px">
      <TabList>
        <Tab>Invoices</Tab>
        <Tab>Customers</Tab>
        <Tab>Drafts</Tab>
      </TabList>
      <Panels label="Vertical segmented" />
    </Tabs>
  ),
};

export const SoftRounded: Story = {
  name: 'Soft rounded',
  render: () => (
    <Tabs variant="soft-rounded">
      <TabList>
        <Tab>Invoices</Tab>
        <Tab>Customers</Tab>
        <Tab>Drafts</Tab>
      </TabList>
      <Panels label="Soft rounded" />
    </Tabs>
  ),
};
