import { forwardRef, type ComponentProps } from 'react';
import {
  Skeleton as ChakraSkeleton,
  SkeletonCircle as ChakraSkeletonCircle,
  SkeletonText as ChakraSkeletonText,
  chakra,
  useBreakpointValue,
} from '@chakra-ui/react';

type SkeletonProps = ComponentProps<typeof ChakraSkeleton>;

const loadedAttr = (isLoaded?: boolean) => (isLoaded ? { 'data-loaded': '' } : {});

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(function Skeleton(
  { isLoaded, ...props },
  ref,
) {
  return <ChakraSkeleton ref={ref} isLoaded={isLoaded} {...props} {...loadedAttr(isLoaded)} />;
});

type CircleProps = ComponentProps<typeof ChakraSkeletonCircle>;

export function SkeletonCircle({ isLoaded, ...props }: CircleProps) {
  return <ChakraSkeletonCircle isLoaded={isLoaded} {...props} {...loadedAttr(isLoaded)} />;
}

type TextProps = ComponentProps<typeof ChakraSkeletonText>;

export function SkeletonText({
  noOfLines = 3,
  spacing = '8px',
  skeletonHeight = '8px',
  isLoaded,
  children,
  className,
  startColor,
  endColor,
  fadeDuration,
  speed,
  variant,
  size,
  colorScheme,
  ...rest
}: TextProps) {
  void variant;
  void size;
  void colorScheme;
  const count =
    useBreakpointValue(typeof noOfLines === 'number' ? [noOfLines] : noOfLines) ??
    (typeof noOfLines === 'number' ? noOfLines : 3);
  const lines = Array.from({ length: count }, (_, index) => index + 1);

  return (
    <chakra.div className={['chakra-skeleton__group', className].filter(Boolean).join(' ')} {...rest}>
      {lines.map((number, index) => {
        if (isLoaded && index > 0) return null;
        const sizeProps = isLoaded
          ? {}
          : {
              mb: number === lines.length ? '0' : spacing,
              width: count > 1 && number === lines.length ? '80%' : '100%',
              height: skeletonHeight,
            };
        return (
          <Skeleton
            key={number}
            isLoaded={isLoaded}
            startColor={startColor}
            endColor={endColor}
            fadeDuration={fadeDuration}
            speed={speed}
            {...sizeProps}
          >
            {index === 0 ? children : undefined}
          </Skeleton>
        );
      })}
    </chakra.div>
  );
}
