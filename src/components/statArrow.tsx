import { forwardRef, Fragment } from 'react';
import { chakra, Icon, type IconProps } from '@chakra-ui/react';

import { Icons } from '../icons';

type Props = Omit<IconProps, 'type'> & {
  type?: 'increase' | 'decrease';
};

export const StatArrow = forwardRef<SVGSVGElement, Props>(function StatArrow(
  { type = 'increase', 'aria-label': ariaLabel, ...props },
  ref,
) {
  const label = ariaLabel || (type === 'increase' ? 'increased by' : 'decreased by');
  const glyph = type === 'increase' ? Icons.ArrowUpRight : Icons.ArrowDownRight;

  return (
    <Fragment>
      <chakra.span srOnly>{label}</chakra.span>
      <Icon
        ref={ref}
        as={glyph}
        boxSize="icon-sm"
        color="foreground"
        {...props}
        aria-hidden="true"
      />
    </Fragment>
  );
});
