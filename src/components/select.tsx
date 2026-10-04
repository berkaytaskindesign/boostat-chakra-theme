import { forwardRef, type ComponentProps } from 'react';
import { Select as ChakraSelect } from '@chakra-ui/react';

import { Icons } from '../icons';
import { DecorativeIcon } from './decorativeIcon';

type Props = ComponentProps<typeof ChakraSelect>;

const chevron = <DecorativeIcon as={Icons.ChevronDown} />;

export const Select = forwardRef<HTMLSelectElement, Props>(function Select(
  { icon = chevron, ...props },
  ref,
) {
  return <ChakraSelect ref={ref} icon={icon} {...props} />;
});
