import { forwardRef, type ComponentProps } from 'react';
import { CircularProgress as ChakraCircularProgress } from '@chakra-ui/react';

type Props = ComponentProps<typeof ChakraCircularProgress>;

export const CircularProgress = forwardRef<HTMLDivElement, Props>(function CircularProgress(
  { color = 'primary', trackColor = 'secondary', thickness = '8px', ...props },
  ref,
) {
  return (
    <ChakraCircularProgress
      ref={ref}
      color={color}
      trackColor={trackColor}
      thickness={thickness}
      {...props}
    />
  );
});
