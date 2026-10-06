import type { Meta, StoryObj } from '@storybook/react-vite';
import { Editable, EditableInput, EditablePreview, EditableTextarea, Stack } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Form/Editable',
  component: Editable,
} satisfies Meta<typeof Editable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fields: Story = {
  render: () => (
    <Stack spacing={6} maxW="320px">
      <Editable defaultValue="Click to edit">
        <EditablePreview />
        <EditableInput />
      </Editable>
      <Editable defaultValue="A longer note that wraps onto more than one line.">
        <EditablePreview />
        <EditableTextarea />
      </Editable>
    </Stack>
  ),
};
