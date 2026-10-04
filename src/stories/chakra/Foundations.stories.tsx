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
} from '@chakra-ui/react';

import { colors } from '../../theme/foundations/colors';
import { radii } from '../../theme/foundations/radii';
import { semanticTokens } from '../../theme/foundations/semanticTokens';

const colorTokens = Object.entries(semanticTokens.colors).filter(
  ([name]) => !name.startsWith('chakra-'),
);

const fontSizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'] as const;
const fontFamilies = ['body', 'heading', 'serif'] as const;
const fontWeights = [400, 500, 600, 700] as const;
const radiusTokens = ['none', 'md', 'subtle', 'full'] as const;

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
      {fontFamilies.map((family) => (
        <Stack key={family} spacing={1}>
          <Text fontSize="sm" color="muted-foreground">
            {family}
          </Text>
          {fontSizes.map((size) => (
            <Text key={size} fontFamily={family} fontSize={size} color="foreground">
              {size}
            </Text>
          ))}
        </Stack>
      ))}
      <Stack spacing={2}>
        <Text fontSize="sm" color="muted-foreground">
          weights
        </Text>
        {fontWeights.map((weight) => (
          <Text key={weight} fontFamily="body" fontSize="2xl" fontWeight={weight}>
            {weight}
          </Text>
        ))}
      </Stack>
    </Stack>
  ),
};

export const Radii: Story = {
  render: () => (
    <HStack spacing={6} align="start">
      {radiusTokens.map((token) => (
        <Stack key={token} spacing={2} align="center">
          <Box
            boxSize="20"
            bg="muted"
            borderWidth="1px"
            borderColor="border"
            borderRadius={token}
          />
          <Text fontSize="sm">{token}</Text>
          <Text fontSize="xs" color="muted-foreground">
            {radii[token]}
          </Text>
        </Stack>
      ))}
    </HStack>
  ),
};

export const FocusRing: Story = {
  name: 'Focus ring',
  render: () => (
    <Stack spacing={4} align="start" maxW="xs">
      <Button boxShadow="outline">Button</Button>
      <Input defaultValue="Input" borderColor="ring" boxShadow="outline" />
    </Stack>
  ),
};
