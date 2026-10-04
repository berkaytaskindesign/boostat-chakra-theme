import { forwardRef, type ComponentProps } from 'react';
import { TagCloseButton as ChakraTagCloseButton } from '@chakra-ui/react';

import { Icons } from '../icons';
import { DecorativeIcon } from './decorativeIcon';

type Props = ComponentProps<typeof ChakraTagCloseButton>;

export const TagCloseButton = forwardRef<HTMLButtonElement, Props>(function TagCloseButton(
  { children, ...props },
  ref,
) {
  return (
    <ChakraTagCloseButton ref={ref} {...props}>
      {children ?? <DecorativeIcon as={Icons.Close} />}
    </ChakraTagCloseButton>
  );
});
