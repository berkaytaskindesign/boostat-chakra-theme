import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Form/Slider',
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Slider defaultValue={40} aria-label="volume" maxW="320px">
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  ),
};
