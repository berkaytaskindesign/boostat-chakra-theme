import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Stack,
} from '@chakra-ui/react';

const meta = {
  title: 'Chakra v2/Form/Slider',
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const States: Story = {
  render: () => (
    <Stack spacing={6}>
      <Slider defaultValue={40} aria-label="rest" maxW="320px">
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Slider defaultValue={40} aria-label="focus" maxW="320px">
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb data-focus-visible />
      </Slider>
      <Slider defaultValue={40} isDisabled aria-label="disabled" maxW="320px">
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <FormControl isInvalid maxW="320px">
        <FormLabel>Volume</FormLabel>
        <Slider defaultValue={40} aria-label="invalid">
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <FormErrorMessage>Too low.</FormErrorMessage>
      </FormControl>
    </Stack>
  ),
};

export const Marks: Story = {
  render: () => (
    <Slider defaultValue={50} aria-label="marks" maxW="320px" mb={8}>
      <SliderMark value={0} mt={3}>
        0
      </SliderMark>
      <SliderMark value={50} mt={3} ml={-2}>
        50
      </SliderMark>
      <SliderMark value={100} mt={3} ml={-4}>
        100
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  ),
};
