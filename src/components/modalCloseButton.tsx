import { forwardRef, type ComponentProps } from 'react';
import { ModalCloseButton as ChakraModalCloseButton } from '@chakra-ui/react';

import { Icons } from '../icons';
import { DecorativeIcon } from './decorativeIcon';

type Props = ComponentProps<typeof ChakraModalCloseButton>;

export const ModalCloseButton = forwardRef<HTMLButtonElement, Props>(function ModalCloseButton(
  { children, ...props },
  ref,
) {
  return (
    <ChakraModalCloseButton ref={ref} {...props}>
      {children ?? <DecorativeIcon as={Icons.Close} />}
    </ChakraModalCloseButton>
  );
});
