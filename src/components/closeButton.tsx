import { forwardRef, type ComponentProps } from 'react';
import { CloseButton as ChakraCloseButton } from '@chakra-ui/react';

import { Icons } from '../icons';
import { DecorativeIcon } from './decorativeIcon';

type Props = ComponentProps<typeof ChakraCloseButton>;

export const CloseButton = forwardRef<HTMLButtonElement, Props>(function CloseButton(
  { children, ...props },
  ref,
) {
  return (
    <ChakraCloseButton ref={ref} {...props}>
      {children ?? <DecorativeIcon as={Icons.Close} />}
    </ChakraCloseButton>
  );
});
