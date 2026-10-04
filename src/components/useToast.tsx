import type { ReactNode } from 'react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  useToast as useChakraToast,
  type UseToastOptions,
} from '@chakra-ui/react';

import { AlertIcon } from './alertIcon';
import { CloseButton } from './closeButton';

type ToastRenderProps = UseToastOptions & {
  onClose?: () => void;
  icon?: ReactNode;
};

function ToastView({
  status,
  variant = 'solid',
  title,
  description,
  isClosable,
  onClose,
  icon,
  id,
  colorScheme,
}: ToastRenderProps) {
  const ids = id
    ? { root: `toast-${id}`, title: `toast-${id}-title`, description: `toast-${id}-description` }
    : undefined;

  return (
    <Alert
      addRole={false}
      status={status}
      variant={variant}
      id={ids?.root}
      alignItems="start"
      borderRadius="md"
      boxShadow="lg"
      paddingEnd={8}
      textAlign="start"
      width="auto"
      colorScheme={colorScheme}
    >
      <AlertIcon>{icon}</AlertIcon>
      <div style={{ flex: 1, maxWidth: '100%' }}>
        {title ? <AlertTitle id={ids?.title}>{title}</AlertTitle> : null}
        {description ? (
          <AlertDescription id={ids?.description} display="block">
            {description}
          </AlertDescription>
        ) : null}
      </div>
      {isClosable ? (
        <CloseButton size="sm" onClick={onClose} position="absolute" insetEnd={1} top={1} />
      ) : null}
    </Alert>
  );
}

export function useToast(options?: UseToastOptions) {
  return useChakraToast({
    ...options,
    render: options?.render ?? ((props) => <ToastView {...props} />),
  });
}
