import { forwardRef, type ComponentProps } from 'react';
import { Icon, useFormControlContext, useFormErrorStyles } from '@chakra-ui/react';

import { Icons } from '../icons';

type Props = ComponentProps<typeof Icon>;

export const FormErrorIcon = forwardRef<SVGSVGElement, Props>(function FormErrorIcon(props, ref) {
  const styles = useFormErrorStyles();
  const field = useFormControlContext();

  if (!field?.isInvalid) return null;

  return (
    <Icon
      ref={ref}
      as={Icons.Warning}
      className="chakra-form__error-icon"
      __css={styles.icon}
      {...props}
      aria-hidden="true"
    />
  );
});
