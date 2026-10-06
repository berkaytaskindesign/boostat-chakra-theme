import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Box,
  Button,
  DarkMode,
  HStack,
  Input,
  LightMode,
  SimpleGrid,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';

import { colors } from '../../theme/foundations/colors';
import { fontWeights } from '../../theme/foundations/fontWeights';
import { radii } from '../../theme/foundations/radii';
import { semanticTokens } from '../../theme/foundations/semanticTokens';

const colorTokens = Object.entries(semanticTokens.colors).filter(
  ([name]) => !name.startsWith('chakra-'),
);

const zeroRadii = Object.entries(radii).filter(([, value]) => value === '0');
const shapedRadii = Object.entries(radii).filter(([, value]) => value !== '0');
const headingSizes = [
  ['xs', '14px', 'sans'],
  ['sm', '16px', 'sans'],
  ['md', '20px', 'serif'],
  ['lg', '24px', 'serif'],
  ['xl', '30px', 'serif'],
  ['2xl', '36px', 'serif'],
  ['3xl', '48px', 'serif'],
  ['4xl', '60px', 'serif'],
] as const;
const textVariants = ['body', 'body-lg', 'caption', 'label', 'muted'] as const;

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

export const Typography: Story = {
  render: () => (
    <Stack spacing={10}>
      <Stack spacing={2}>
        <Text variant="caption">body default</Text>
        <Text>The quick brown fox jumps over the lazy dog.</Text>
      </Stack>
      <Stack spacing={3}>
        <Text variant="caption">headings</Text>
        {headingSizes.map(([size, px, face]) => (
          <Heading key={size} size={size}>
            {size} {px} {face}
          </Heading>
        ))}
      </Stack>
      <Stack spacing={2}>
        <Text variant="caption">text styles</Text>
        {textVariants.map((variant) => (
          <Text key={variant} variant={variant}>
            {variant}
          </Text>
        ))}
      </Stack>
      <Stack spacing={2}>
        <Text fontSize="sm" color="muted-foreground">
          weights
        </Text>
        {Object.entries(fontWeights).map(([name, value]) => (
          <Text key={name} fontFamily="body" fontSize="2xl" fontWeight={name}>
            {name} {value}
          </Text>
        ))}
      </Stack>
    </Stack>
  ),
};

export const Radii: Story = {
  render: () => (
    <Stack spacing={8} align="start">
      <Stack spacing={2} align="start">
        <Box boxSize="20" bg="muted" borderWidth="1px" borderColor="border" borderRadius="none" />
        <Text fontSize="sm" whiteSpace="nowrap">
          {zeroRadii.map(([name]) => name).join(' ')}
        </Text>
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
