import type { ComponentProps } from 'react';
import { Icon } from '@chakra-ui/react';

type IconComponentProps = ComponentProps<typeof Icon>;

type DecorativeIconProps = IconComponentProps & {
  as: NonNullable<IconComponentProps['as']>;
};

export function DecorativeIcon({ as, boxSize = '1em', ...props }: DecorativeIconProps) {
  return <Icon as={as} boxSize={boxSize} {...props} aria-hidden="true" />;
}
