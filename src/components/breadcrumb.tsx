import type { ComponentProps } from 'react';
import { Breadcrumb as ChakraBreadcrumb } from '@chakra-ui/react';

import { Icons } from '../icons';
import { DecorativeIcon } from './decorativeIcon';

type Props = ComponentProps<typeof ChakraBreadcrumb>;

const chevron = <DecorativeIcon as={Icons.ChevronRight} boxSize="icon-sm" />;

export function Breadcrumb({ separator = chevron, ...props }: Props) {
  return <ChakraBreadcrumb separator={separator} {...props} />;
}
