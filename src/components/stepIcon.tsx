import { StepNumber, useStepContext, useStepperStyles, type IconProps } from '@chakra-ui/react';

import { Icons } from '../icons';
import { DecorativeIcon } from './decorativeIcon';

export function StepIcon(props: IconProps) {
  const { status } = useStepContext();
  const styles = useStepperStyles();

  if (status !== 'complete') return <StepNumber />;

  return <DecorativeIcon as={Icons.Check} __css={styles.icon} {...props} />;
}
