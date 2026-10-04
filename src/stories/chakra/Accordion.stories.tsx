import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';

import { AccordionIcon } from '../../components';

const meta = {
  title: 'Chakra v2/Disclosure/Accordion',
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Section 1
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>The first panel.</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Section 2
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>The second panel.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};
