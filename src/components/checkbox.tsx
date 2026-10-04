import { forwardRef, type ComponentProps } from 'react';
import { Checkbox as ChakraCheckbox, type SystemStyleObject } from '@chakra-ui/react';

import { Icons } from '../icons';
import { DecorativeIcon } from './decorativeIcon';

type CheckboxIconProps = {
  isChecked?: boolean;
  isIndeterminate?: boolean;
  __css?: SystemStyleObject;
};

function CheckboxIcon({ isChecked, isIndeterminate, __css }: CheckboxIconProps) {
  if (!isChecked && !isIndeterminate) return null;

  return (
    <DecorativeIcon
      as={isIndeterminate ? Icons.Remove : Icons.Check}
      boxSize="full"
      __css={__css}
    />
  );
}

const checkboxIcon = <CheckboxIcon />;

type Props = ComponentProps<typeof ChakraCheckbox>;

export const Checkbox = forwardRef<HTMLInputElement, Props>(function Checkbox(
  { icon = checkboxIcon, ...props },
  ref,
) {
  return <ChakraCheckbox ref={ref} icon={icon} {...props} />;
});
