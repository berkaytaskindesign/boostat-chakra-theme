import { forwardRef, type ComponentProps } from 'react';
import { NumberDecrementStepper as ChakraNumberDecrementStepper } from '@chakra-ui/react';

import { Icons } from '../icons';
import { DecorativeIcon } from './decorativeIcon';

type Props = ComponentProps<typeof ChakraNumberDecrementStepper>;

export const NumberDecrementStepper = forwardRef<HTMLDivElement, Props>(
  function NumberDecrementStepper({ children, ...props }, ref) {
    return (
      <ChakraNumberDecrementStepper ref={ref} {...props}>
        {children ?? <DecorativeIcon as={Icons.ExpandMore} boxSize="icon-sm" />}
      </ChakraNumberDecrementStepper>
    );
  },
);
