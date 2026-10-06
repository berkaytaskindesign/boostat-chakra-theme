const token = (light: string, dark: string) => ({
  default: light,
  _dark: dark,
});

const alias = (name: string) => ({
  default: name,
  _dark: name,
});

export const semanticTokens = {
  colors: {
    background: token('hsl(0, 0%, 100%)', 'hsl(0, 0%, 5%)'),
    foreground: token('hsl(0, 0%, 7%)', 'hsl(0, 0%, 98%)'),
    card: token('hsl(45, 18%, 96%)', 'hsl(0, 0%, 7%)'),
    'card-foreground': token('hsl(240, 10%, 3.9%)', 'hsl(0, 0%, 98%)'),
    popover: token('hsl(45, 18%, 96%)', 'hsl(0, 0%, 7%)'),
    'popover-foreground': token('hsl(240, 10%, 3.9%)', 'hsl(0, 0%, 98%)'),
    primary: token('hsl(240, 5.9%, 10%)', 'hsl(0, 0%, 98%)'),
    'primary-foreground': token('hsl(0, 0%, 98%)', 'hsl(240, 5.9%, 10%)'),
    secondary: token('hsl(40, 11%, 89%)', 'hsl(0, 0%, 7%)'),
    'secondary-foreground': token('hsl(240, 5.9%, 10%)', 'hsl(0, 0%, 98%)'),
    muted: token('hsl(40, 11%, 89%)', 'hsl(0, 0%, 11%)'),
    'muted-foreground': token('hsl(0, 0%, 38%)', 'hsl(0, 0%, 38%)'),
    accent: token('hsl(40, 10%, 94%)', 'hsl(0, 0%, 11%)'),
    'accent-foreground': token('hsl(240, 5.9%, 10%)', 'hsl(0, 0%, 98%)'),
    border: token('hsl(45, 5%, 85%)', 'hsl(0, 0%, 11%)'),
    'overlay-scrim': token('hsla(60, 14%, 96%, 0.6)', 'hsla(0, 0%, 5%, 0.8)'),
    sheet: token('hsl(60, 9%, 98%)', 'hsl(0, 0%, 5%)'),
    input: token('hsl(240, 5.9%, 90%)', 'hsl(0, 0%, 11%)'),
    ring: token('hsl(240, 5.9%, 10%)', 'hsl(240, 4.9%, 83.9%)'),
    'focus-border': alias('foreground'),
    'control-checked': alias('accent'),
    'control-off': token('hsl(0, 0%, 88%)', 'hsl(0, 0%, 40%)'),
    destructive: token('hsl(0, 84.2%, 45%)', 'hsl(359, 100%, 46%)'),
    'destructive-foreground': token('hsl(0, 0%, 98%)', 'hsl(0, 0%, 100%)'),
    'destructive-text': token('hsl(0, 84.2%, 45%)', 'hsl(359, 100%, 65%)'),
    'chakra-body-bg': alias('background'),
    'chakra-body-text': alias('foreground'),
    'chakra-border-color': alias('border'),
    'chakra-placeholder-color': alias('muted-foreground'),
    'chakra-subtle-bg': alias('muted'),
    'chakra-subtle-text': alias('muted-foreground'),
  },
  shadows: {
    overlay: token('0 4px 16px -2px hsla(0, 0%, 0%, 0.08)', '0 4px 16px -2px hsla(0, 0%, 0%, 0.5)'),
  },
};
