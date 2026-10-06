import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Stack } from '@chakra-ui/react';

import { AccordionIcon } from '../../components';

const meta = {
  title: 'Chakra v2/Disclosure/Accordion',
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

function Item({ title, children, isDisabled }: { title: string; children: string; isDisabled?: boolean }) {
  return (
    <AccordionItem isDisabled={isDisabled}>
      <AccordionButton>
        {title}
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>{children}</AccordionPanel>
    </AccordionItem>
  );
}

export const Single: Story = {
  render: () => (
    <Accordion defaultIndex={0} maxW="md">
      <Item title="Billing">Invoices are sent on the first of the month.</Item>
      <Item title="Team">Invite members from the team page.</Item>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion defaultIndex={[0]} allowMultiple maxW="md">
      <Item title="Billing">Invoices are sent on the first of the month.</Item>
      <Item title="Team">Invite members from the team page.</Item>
    </Accordion>
  ),
};

export const DisabledItem: Story = {
  render: () => (
    <Stack spacing={8} maxW="md">
      <Accordion defaultIndex={0}>
        <Item title="Billing">Invoices are sent on the first of the month.</Item>
        <Item title="Archive" isDisabled>
          Closed years stay read-only.
        </Item>
      </Accordion>
    </Stack>
  ),
};
