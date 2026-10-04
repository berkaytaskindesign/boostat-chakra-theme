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
  { title: 'Contact', description: 'Info' },
  { title: 'Date', description: 'Time' },
  { title: 'Confirm', description: 'Done' },
];

const meta = {
  title: 'Chakra v2/Navigation/Stepper',
  component: Stepper,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Stepper index={1}>
      {steps.map((step, index) => (
        <Step key={step.title}>
          <StepIndicator>
            <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
          </StepIndicator>
          <Box flexShrink={0}>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>
          {index < steps.length - 1 ? <StepSeparator /> : null}
        </Step>
      ))}
    </Stepper>
  ),
};
