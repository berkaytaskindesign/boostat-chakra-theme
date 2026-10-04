import { StepNumber, useStepContext, type IconProps } from '@chakra-ui/react';

import { Icons } from '../icons';
import { DecorativeIcon } from './decorativeIcon';

export function StepIcon(props: IconProps) {
  const { status } = useStepContext();

  if (status !== 'complete') return <StepNumber />;

  return <DecorativeIcon as={Icons.Check} {...props} />;
}
