import type { ComponentProps } from 'react';
import { Drawer as ChakraDrawer } from '@chakra-ui/react';

type Props = ComponentProps<typeof ChakraDrawer>;

export function Drawer({ placement = 'right', ...props }: Props) {
  return <ChakraDrawer placement={placement} {...props} variant={placement} />;
}
