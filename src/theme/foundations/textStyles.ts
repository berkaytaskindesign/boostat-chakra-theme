import type { SystemStyleObject } from '@chakra-ui/react';

const text = (fontSize: string, color: string): SystemStyleObject => ({
  fontSize,
  lineHeight: '1.5',
  fontWeight: 'normal',
  color,
});

export const textStyles = {
  body: text('sm', 'foreground'),
  'body-lg': text('md', 'foreground'),
  caption: text('xs', 'muted-foreground'),
  label: text('xs', 'foreground'),
  muted: text('sm', 'muted-foreground'),
};
