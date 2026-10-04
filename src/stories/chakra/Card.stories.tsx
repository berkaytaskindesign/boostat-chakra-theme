import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Data display/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Elevated: Story = {
  render: () => (
    <Card maxW="sm">
      <CardHeader>
        <Heading size="md">Customer</Heading>
      </CardHeader>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
      <CardFooter>
        <Button>View here</Button>
      </CardFooter>
    </Card>
  ),
};

export const Outline: Story = {
  render: () => (
    <Card maxW="sm" variant="outline">
      <CardBody>
        <Text>Outline cards use the theme border token.</Text>
      </CardBody>
    </Card>
  ),
};
