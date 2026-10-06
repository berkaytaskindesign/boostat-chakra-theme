import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Button, HStack, Stack, Table, Tbody, Td, Text, Tr } from '@chakra-ui/react';

import { Skeleton, SkeletonCircle, SkeletonText } from '../../components';

const meta = {
  title: 'Chakra v2/Feedback/Skeleton',
  component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

function SkeletonDemo() {
  const [loaded, setLoaded] = useState(false);

  return (
    <Stack spacing={6} maxW="420px">
      <Button alignSelf="start" variant="outline" onClick={() => setLoaded((value) => !value)}>
        {loaded ? 'Show skeleton' : 'Show content'}
      </Button>
      <Box borderWidth="1px" borderColor="border" p="16px">
        <HStack align="start" spacing={4}>
          <SkeletonCircle boxSize="40px" isLoaded={loaded} />
          <Box flex="1">
            <SkeletonText noOfLines={2} spacing="8px" isLoaded={loaded}>
              <Text fontSize="sm">Ada Lovelace</Text>
              <Text fontSize="xs" color="muted-foreground">
                Updated today
              </Text>
            </SkeletonText>
          </Box>
        </HStack>
        <Skeleton mt="16px" height="80px" isLoaded={loaded}>
          <Text fontSize="sm">The March invoice is ready to send.</Text>
        </Skeleton>
      </Box>
      <Table variant="minimal">
        <Tbody>
          <Tr>
            <Td>
              <Skeleton height="16px" isLoaded={loaded}>
                Northwind
              </Skeleton>
            </Td>
            <Td>
              <Skeleton height="16px" isLoaded={loaded}>
                Draft
              </Skeleton>
            </Td>
            <Td textAlign="end">
              <Skeleton height="16px" isLoaded={loaded}>
                1,240
              </Skeleton>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Stack>
  );
}

export const Loading: Story = {
  render: () => <SkeletonDemo />,
};
