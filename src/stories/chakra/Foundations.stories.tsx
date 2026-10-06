import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Box,
  Button,
  DarkMode,
  HStack,
  Input,
  LightMode,
  SimpleGrid,
  Stack,
  Text,
  useTheme,
} from '@chakra-ui/react';

import { colors } from '../../theme/foundations/colors';
import { radii } from '../../theme/foundations/radii';
import { semanticTokens } from '../../theme/foundations/semanticTokens';

const colorTokens = Object.entries(semanticTokens.colors).filter(
  ([name]) => !name.startsWith('chakra-'),
);

const shapedRadii = Object.entries(radii).filter(([, value]) => value !== '0');

function ColorColumn({ mode }: { mode: 'light' | 'dark' }) {
  const Mode = mode === 'dark' ? DarkMode : LightMode;

  return (
    <Mode>
      <Stack
        data-theme={mode}
        bg="background"
        color="foreground"
        p={4}
        spacing={3}
        borderWidth="1px"
        borderColor="border"
      >
        <Text fontSize="sm" fontWeight="semibold">
          {mode === 'light' ? 'Light' : 'Dark'}
        </Text>
        {colorTokens.map(([name, token]) => (
          <HStack key={name} spacing={3} align="center">
            <Box bg={name} borderWidth="1px" borderColor="border" boxSize="10" flexShrink={0} />
            <Stack spacing={0}>
              <Text fontSize="sm" color={name === 'destructive-text' ? 'destructive-text' : 'foreground'}>
                {name}
              </Text>
              <Text fontSize="xs" color="muted-foreground">
                {mode === 'light' ? token.default : token._dark}
              </Text>
            </Stack>
          </HStack>
        ))}
      </Stack>
    </Mode>
  );
}

const meta = {
  title: 'Chakra v2/Foundations',
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  render: () => (
    <SimpleGrid columns={2} spacing={4}>
      <ColorColumn mode="light" />
      <ColorColumn mode="dark" />
    </SimpleGrid>
  ),
};

export const BrandScale: Story = {
  name: 'Brand scale',
  render: () => (
    <SimpleGrid columns={5} spacing={4}>
      {Object.entries(colors.brand).map(([step, value]) => (
        <Stack key={step} spacing={2}>
          <Box bg={`brand.${step}`} borderWidth="1px" borderColor="border" h="16" />
          <Text fontSize="sm">{step}</Text>
          <Text fontSize="xs" color="muted-foreground">
            {value}
          </Text>
        </Stack>
      ))}
    </SimpleGrid>
  ),
};

export const Radii: Story = {
  render: () => (
    <Stack spacing={8} align="start">
      <Stack spacing={2} align="start">
        <Box boxSize="20" bg="muted" borderWidth="1px" borderColor="border" borderRadius="none" />
        <Text fontSize="sm">none</Text>
        <Text fontSize="xs" color="muted-foreground">
          0
        </Text>
      </Stack>
      {shapedRadii.map(([token, value]) => (
        <Stack key={token} spacing={2} align="start">
          <Box
            boxSize="20"
            bg="muted"
            borderWidth="1px"
            borderColor="border"
            borderRadius={token}
          />
          <Text fontSize="sm">{token}</Text>
          <Text fontSize="xs" color="muted-foreground">
            {value}
          </Text>
        </Stack>
      ))}
    </Stack>
  ),
};

export const Shadows: Story = {
  render: () => (
    <SimpleGrid columns={2} spacing={8}>
      {(['light', 'dark'] as const).map((mode) => {
        const Mode = mode === 'dark' ? DarkMode : LightMode;
        return (
          <Mode key={mode}>
            <Stack bg="background" color="foreground" p={8} spacing={3} borderWidth="1px" borderColor="border">
              <Box bg="background" borderWidth="1px" borderColor="border" boxShadow="overlay" p={6}>
                <Text fontSize="sm">overlay</Text>
              </Box>
              <Text fontSize="xs" color="muted-foreground">
                {mode}
              </Text>
            </Stack>
          </Mode>
        );
      })}
    </SimpleGrid>
  ),
};

export const FocusRing: Story = {
  name: 'Focus ring',
  render: () => (
    <Stack spacing={4} align="start" maxW="xs">
      <Stack spacing={2} align="start">
        <Text fontSize="sm" color="muted-foreground">
          Button
        </Text>
        <Button boxShadow="outline">Button</Button>
      </Stack>
      <Stack spacing={2} align="start" w="full">
        <Text fontSize="sm" color="muted-foreground">
          Field focus
        </Text>
        <Input defaultValue="Input" data-focus-visible />
      </Stack>
    </Stack>
  ),
};

type BreakpointMap = Record<string, string>;

/** Media-query em and rem resolve against the browser default of 16px. */
function minWidthInPx(value: string) {
  const amount = Number.parseFloat(value);
  if (!Number.isFinite(amount)) return 0;
  if (value.endsWith('em') || value.endsWith('rem')) return amount * 16;
  return amount;
}

function formatPx(value: number) {
  const rounded = Math.round(value * 100) / 100;
  return `${rounded}px`;
}

function breakpointRows(breakpoints: BreakpointMap) {
  const rows = Object.entries(breakpoints)
    .filter(([name, value]) => Number.isNaN(Number(name)) && typeof value === 'string')
    .map(([name, minW]) => ({ name, minW, px: minWidthInPx(minW) }))
    .sort((a, b) => a.px - b.px);
  const widest = rows.reduce((max, row) => Math.max(max, row.px), 0);

  return rows.map((row) => ({
    ...row,
    width: widest === 0 ? '0%' : `${(row.px / widest) * 100}%`,
  }));
}

function BreakpointScale() {
  const theme = useTheme();
  const rows = breakpointRows(theme.breakpoints as BreakpointMap);

  return (
    <Stack spacing={3}>
      {rows.map((row) => (
        <HStack key={row.name} spacing={3} align="center" data-breakpoint={row.name}>
          <Text fontSize="sm" w="12" flexShrink={0} whiteSpace="nowrap">
            {row.name}
          </Text>
          <Box flex="1" h="8px" bg="accent" borderWidth="1px" borderColor="border" aria-hidden>
            <Box h="full" bg="foreground" w={row.width} minW={row.px === 0 ? '2px' : undefined} />
          </Box>
          <Text fontSize="sm" color="muted-foreground" flexShrink={0} whiteSpace="nowrap">
            {formatPx(row.px)}
          </Text>
        </HStack>
      ))}
    </Stack>
  );
}

export const Breakpoints: Story = {
  render: () => <BreakpointScale />,
};
