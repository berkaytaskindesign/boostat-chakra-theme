import { Icon, type IconProps } from '@chakra-ui/react';
import type { IconType } from 'react-icons';

type DecorativeIconProps = IconProps & {
  as: IconType;
};

export function DecorativeIcon({ as, boxSize = '1em', ...props }: DecorativeIconProps) {
  return <Icon as={as} boxSize={boxSize} {...props} aria-hidden="true" />;
}
