import { forwardRef } from 'react';
import { Icon, useAccordionItemState, type IconProps } from '@chakra-ui/react';

import { Icons } from '../icons';

export const AccordionIcon = forwardRef<SVGSVGElement, IconProps>(function AccordionIcon(
  props,
  ref,
) {
  const { isOpen, isDisabled } = useAccordionItemState();

  return (
    <Icon
      ref={ref}
      as={Icons.ExpandMore}
      className="chakra-accordion__icon"
      opacity={isDisabled ? 0.4 : 1}
      transform={isOpen ? 'rotate(180deg)' : undefined}
      transformOrigin="center"
      transition="transform 0.2s"
      {...props}
      aria-hidden="true"
    />
  );
});
