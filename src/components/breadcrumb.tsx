import { forwardRef, type ComponentProps } from 'react';
import { Breadcrumb as ChakraBreadcrumb } from '@chakra-ui/react';

import { Icons } from '../icons';
import { DecorativeIcon } from './decorativeIcon';

type Props = ComponentProps<typeof ChakraBreadcrumb>;

const chevron = <DecorativeIcon as={Icons.ChevronRight} boxSize="icon-sm" />;

export const Breadcrumb = forwardRef<HTMLElement, Props>(function Breadcrumb(
  { separator = chevron, ...props },
  ref,
) {
  return <ChakraBreadcrumb ref={ref} separator={separator} {...props} />;
});
