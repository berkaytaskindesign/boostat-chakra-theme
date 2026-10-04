import { forwardRef, type ComponentProps } from 'react';
import { Avatar as ChakraAvatar, Icon } from '@chakra-ui/react';

import { Icons } from '../icons';

type Props = ComponentProps<typeof ChakraAvatar>;

const person = <Icon as={Icons.AccountCircle} boxSize="full" />;

export const Avatar = forwardRef<HTMLSpanElement, Props>(function Avatar(
  { icon = person, ...props },
  ref,
) {
  return <ChakraAvatar ref={ref} icon={icon} {...props} />;
});
