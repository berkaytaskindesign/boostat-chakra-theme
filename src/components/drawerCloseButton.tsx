import { forwardRef, type ComponentProps } from 'react';
import { DrawerCloseButton as ChakraDrawerCloseButton } from '@chakra-ui/react';

import { Icons } from '../icons';
import { DecorativeIcon } from './decorativeIcon';

type Props = ComponentProps<typeof ChakraDrawerCloseButton>;

export const DrawerCloseButton = forwardRef<HTMLButtonElement, Props>(function DrawerCloseButton(
  { children, ...props },
  ref,
) {
  return (
    <ChakraDrawerCloseButton ref={ref} {...props}>
      {children ?? <DecorativeIcon as={Icons.Close} />}
    </ChakraDrawerCloseButton>
  );
});
