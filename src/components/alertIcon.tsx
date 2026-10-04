import { forwardRef, type ReactNode } from 'react';
import {
  Spinner,
  chakra,
  useAlertContext,
  useAlertStyles,
  type AlertStatus,
} from '@chakra-ui/react';

import { Icons } from '../icons';
import { DecorativeIcon } from './decorativeIcon';

const statusIcons = {
  info: Icons.Info,
  warning: Icons.Warning,
  success: Icons.CheckCircle,
  error: Icons.Error,
} as const;

type Props = {
  children?: ReactNode;
  className?: string;
};

export const AlertIcon = forwardRef<HTMLElement, Props>(function AlertIcon(
  { children, ...props },
  ref,
) {
  const { status } = useAlertContext();
  const styles = useAlertStyles();
  const css = status === 'loading' ? styles.spinner : styles.icon;
  const glyph =
    children ??
    (status === 'loading' ? (
      <Spinner aria-hidden="true" h="100%" w="100%" />
    ) : (
      <DecorativeIcon as={statusIcons[status as Exclude<AlertStatus, 'loading'>] ?? Icons.Info} boxSize="full" />
    ));

  return (
    <chakra.span
      ref={ref}
      display="inherit"
      data-status={status}
      className="chakra-alert__icon"
      __css={css}
      {...props}
      aria-hidden="true"
    >
      {glyph}
    </chakra.span>
  );
});
