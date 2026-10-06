import { forwardRef } from 'react';
import { Icon, useAccordionItemState, useAccordionStyles, type IconProps } from '@chakra-ui/react';

import { Icons } from '../icons';

export const AccordionIcon = forwardRef<SVGSVGElement, IconProps>(function AccordionIcon(
  props,
  ref,
) {
  const { isOpen } = useAccordionItemState();
  const styles = useAccordionStyles();

  return (
    <Icon
      ref={ref}
      as={Icons.ExpandMore}
      className="chakra-accordion__icon"
      __css={styles.icon}
      transform={isOpen ? 'rotate(180deg)' : undefined}
      transformOrigin="center"
      {...props}
      aria-hidden="true"
    />
  );
});
