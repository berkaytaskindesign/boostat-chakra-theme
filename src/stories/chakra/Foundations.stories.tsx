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
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import { theme } from '../../theme';
import { colors } from '../../theme/foundations/colors';
import { fonts } from '../../theme/foundations/fonts';
import { fontWeights } from '../../theme/foundations/fontWeights';
import { radii } from '../../theme/foundations/radii';
import { semanticTokens } from '../../theme/foundations/semanticTokens';

const colorTokens = Object.entries(semanticTokens.colors).filter(
  ([name]) => !name.startsWith('chakra-'),
);

const fontSizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'] as const;
const zeroRadii = Object.entries(radii).filter(([, value]) => value === '0');
const shapedRadii = Object.entries(radii).filter(([, value]) => value !== '0');
const typefaces = [
  { name: 'body / mono', family: 'body' },
  { name: 'heading', family: 'heading' },
] as const;

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
              <Text fontSize="sm">{name}</Text>
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
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th textTransform="none" letterSpacing="normal">
              size
            </Th>
            <Th textTransform="none" letterSpacing="normal">
              font-size
            </Th>
            <Th textTransform="none" letterSpacing="normal">
              line-height
            </Th>
            {typefaces.map((face) => (
              <Th key={face.name} textTransform="none" letterSpacing="normal" fontWeight="normal">
                {face.name}
                <Text fontSize="xs" color="muted-foreground" fontWeight="normal">
                  {fonts[face.family]}
                </Text>
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {fontSizes.map((size) => (
            <Tr key={size}>
              <Td verticalAlign="baseline">{size}</Td>
              <Td verticalAlign="baseline">{String(theme.fontSizes[size])}</Td>
              <Td verticalAlign="baseline">{String(theme.lineHeights.base)}</Td>
              {typefaces.map((face) => (
                <Td key={face.name} verticalAlign="baseline">
                  <Text fontFamily={face.family} fontSize={size} lineHeight="base">
                    {size}
                  </Text>
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
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
