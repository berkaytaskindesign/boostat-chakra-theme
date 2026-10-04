import { forwardRef, type ComponentProps } from 'react';
import { NumberIncrementStepper as ChakraNumberIncrementStepper } from '@chakra-ui/react';

import { Icons } from '../icons';
import { DecorativeIcon } from './decorativeIcon';

type Props = ComponentProps<typeof ChakraNumberIncrementStepper>;

export const NumberIncrementStepper = forwardRef<HTMLDivElement, Props>(
  function NumberIncrementStepper({ children, ...props }, ref) {
    return (
      <ChakraNumberIncrementStepper ref={ref} {...props}>
        {children ?? <DecorativeIcon as={Icons.ExpandLess} boxSize="icon-sm" />}
      </ChakraNumberIncrementStepper>
    );
  },
);
