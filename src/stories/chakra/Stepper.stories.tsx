import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Box,
  Step,
  StepDescription,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
} from '@chakra-ui/react';

import { StepIcon } from '../../components';

const steps = [
  { title: 'Details', description: 'Customer and amount' },
  { title: 'Schedule', description: 'Send date' },
  { title: 'Review', description: 'Check the draft' },
  { title: 'Send', description: 'Deliver the invoice' },
];

const meta = {
  title: 'Chakra v2/Navigation/Stepper',
  component: Stepper,
} satisfies Meta;

export default meta;
type Story = StoryObj;

function Steps({
  orientation = 'horizontal',
  descriptions = false,
}: {
  orientation?: 'horizontal' | 'vertical';
  descriptions?: boolean;
}) {
  return (
    <Stepper index={2} orientation={orientation}>
      {steps.map((step, index) => (
        <Step key={step.title}>
          <StepIndicator>
            <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
          </StepIndicator>
          <Box flexShrink={0}>
            <StepTitle>{step.title}</StepTitle>
            {descriptions ? <StepDescription>{step.description}</StepDescription> : null}
          </Box>
          {index < steps.length - 1 ? <StepSeparator /> : null}
        </Step>
      ))}
    </Stepper>
  );
}

export const Horizontal: Story = {
  render: () => <Steps />,
};

export const WithDescriptions: Story = {
  name: 'With descriptions',
  render: () => <Steps descriptions />,
};

export const Vertical: Story = {
  render: () => <Steps orientation="vertical" descriptions />,
};
