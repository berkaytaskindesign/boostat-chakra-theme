import type { Meta, StoryObj } from '@storybook/react-vite';
import { RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Form/Range Slider',
  component: RangeSlider,
} satisfies Meta<typeof RangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RangeSlider defaultValue={[20, 60]} aria-label={['min', 'max']} maxW="320px">
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </RangeSlider>
  ),
};
