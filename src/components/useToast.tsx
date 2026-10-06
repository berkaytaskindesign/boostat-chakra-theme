import type { ReactNode } from 'react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  useBreakpointValue,
  useToast as useChakraToast,
  type UseToastOptions,
} from '@chakra-ui/react';

import { AlertIcon } from './alertIcon';
import { CloseButton } from './closeButton';

type ToastRenderProps = UseToastOptions & {
  onClose?: () => void;
  icon?: ReactNode;
};

function ToastView({ status, title, description, isClosable, onClose, icon, id }: ToastRenderProps) {
  const ids = id
    ? { root: `toast-${id}`, title: `toast-${id}-title`, description: `toast-${id}-description` }
    : undefined;

  return (
    <Alert
      addRole={false}
      status={status}
      variant="toast"
      id={ids?.root}
      alignItems="start"
      textAlign="start"
      width="auto"
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
  const position = useBreakpointValue({ base: 'top' as const, md: 'bottom-left' as const });

  return useChakraToast({
    ...options,
    position: options?.position ?? position ?? 'top',
    containerStyle: { maxWidth: '420px', ...options?.containerStyle },
    render: options?.render ?? ((props) => <ToastView {...props} />),
  });
}
