import { useMemo, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, HStack, Icon, Input, Link, SimpleGrid, Stack, Switch, Text } from '@chakra-ui/react';

import { carbonIconNames, Icons as IconSet, type IconName } from '../../icons';

const names = Object.keys(IconSet) as IconName[];
const sizes = [
  { id: 'sm', token: 'icon-sm' },
  { id: 'md', token: 'icon-md' },
  { id: 'lg', token: 'icon-lg' },
] as const;
const carbonLibrary = 'https://carbondesignsystem.com/elements/icons/library/';

const meta = {
  title: 'Chakra v2/Foundations',
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icons: Story = {
  render: () => <IconGallery />,
};

function IconGallery() {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState<IconName | null>(null);
  const [size, setSize] = useState<(typeof sizes)[number]['token']>('icon-md');
  const [showCarbonNames, setShowCarbonNames] = useState(false);
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return names.filter(
      (name) =>
        name.toLowerCase().includes(q) || carbonIconNames[name].toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <Stack spacing={8}>
      <Stack spacing={3}>
        <Input
          placeholder="Search icons"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          maxW="xs"
          aria-label="Search icons"
        />
        <HStack justify="space-between" align="center">
          <HStack spacing={4}>
            <HStack spacing={0} role="radiogroup" aria-label="Icon size">
              {sizes.map((option) => {
                const selected = size === option.token;
                return (
                  <Button
                    key={option.id}
                    size="sm"
                    variant={selected ? 'solid' : 'outline'}
                    aria-checked={selected}
                    role="radio"
                    onClick={() => setSize(option.token)}
                  >
                    {option.id}
                  </Button>
                );
              })}
            </HStack>
            <HStack spacing={2}>
              <Text as="label" htmlFor="carbon-names" fontSize="sm" mb={0}>
                Carbon names
              </Text>
              <Switch
                id="carbon-names"
                isChecked={showCarbonNames}
                onChange={(event) => setShowCarbonNames(event.target.checked)}
              />
            </HStack>
          </HStack>
          <Link href={carbonLibrary} isExternal>
            IBM Carbon icons
          </Link>
        </HStack>
      </Stack>
      <SimpleGrid columns={[2, 4, 6]} spacing={4}>
        {visible.map((name) => (
          <Stack
            key={name}
            as="button"
            type="button"
            spacing={2}
            align="center"
            p={3}
            border="1px solid"
            borderColor="border"
            onClick={() => {
              void navigator.clipboard.writeText(`Icons.${name}`);
              setCopied(name);
            }}
          >
            <Icon as={IconSet[name]} boxSize={size} />
            <Text fontSize="xs" color="muted-foreground">
              {copied === name
                ? 'Copied'
                : showCarbonNames
                  ? `${name} · ${carbonIconNames[name]}`
                  : name}
            </Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
