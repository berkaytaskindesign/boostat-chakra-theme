import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Disclosure/Tabs',
  component: Tabs,
} satisfies Meta;

export default meta;
type Story = StoryObj;

function TabSet({ variant }: { variant?: 'line' | 'enclosed' | 'soft-rounded' }) {
  return (
    <Tabs variant={variant}>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Panel one</TabPanel>
        <TabPanel>Panel two</TabPanel>
        <TabPanel>Panel three</TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export const Line: Story = {
  render: () => <TabSet />,
};

export const Enclosed: Story = {
  render: () => (
    <Stack>
      <TabSet variant="enclosed" />
      <TabSet variant="soft-rounded" />
    </Stack>
  ),
};
