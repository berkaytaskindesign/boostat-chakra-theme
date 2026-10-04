import { forwardRef, type ComponentProps } from 'react';
import { PopoverCloseButton as ChakraPopoverCloseButton } from '@chakra-ui/react';

import { Icons } from '../icons';
import { DecorativeIcon } from './decorativeIcon';

type Props = ComponentProps<typeof ChakraPopoverCloseButton>;

export const PopoverCloseButton = forwardRef<HTMLButtonElement, Props>(function PopoverCloseButton(
  { children, ...props },
  ref,
) {
  return (
    <ChakraPopoverCloseButton ref={ref} {...props}>
      {children ?? <DecorativeIcon as={Icons.Close} />}
    </ChakraPopoverCloseButton>
  );
});
