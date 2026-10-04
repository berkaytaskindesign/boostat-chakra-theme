import { forwardRef, type ComponentProps } from 'react';
import { MenuItemOption as ChakraMenuItemOption } from '@chakra-ui/react';

import { Icons } from '../icons';
import { DecorativeIcon } from './decorativeIcon';

type Props = ComponentProps<typeof ChakraMenuItemOption>;

const check = <DecorativeIcon as={Icons.Check} />;

export const MenuItemOption = forwardRef<HTMLButtonElement, Props>(function MenuItemOption(
  { icon = check, ...props },
  ref,
) {
  return <ChakraMenuItemOption ref={ref} icon={icon} {...props} />;
});
