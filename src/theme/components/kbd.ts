import type { ComponentStyleConfig } from '@chakra-ui/react';

const kbd: ComponentStyleConfig = {
  baseStyle: {
    fontFamily: 'mono',
    fontWeight: 'normal',
    fontSize: 'xs',
    minW: '24px',
    h: '24px',
    px: '4px',
    bg: 'secondary',
    color: 'muted-foreground',
    border: '1px solid',
    borderColor: 'border',
    borderWidth: '1px',
    borderBottomWidth: '1px',
    borderRadius: 'none',
    lineHeight: 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default kbd;
