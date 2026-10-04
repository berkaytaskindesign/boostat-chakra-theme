import type { Meta, StoryObj } from '@storybook/react-vite';
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Form/Editable',
  component: Editable,
} satisfies Meta<typeof Editable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Editable defaultValue="Click to edit">
      <EditablePreview />
      <EditableInput />
    </Editable>
  ),
};
