import type { ComponentProps } from 'react';
import { AlertDialog as ChakraAlertDialog } from '@chakra-ui/react';

type Props = ComponentProps<typeof ChakraAlertDialog>;

export function AlertDialog({ size = 'sm', ...props }: Props) {
  return <ChakraAlertDialog size={size} {...props} />;
}
