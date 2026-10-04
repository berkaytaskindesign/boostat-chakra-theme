import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import App from './App';
import './index.css';

const meta = {
  component: App,
  tags: ['ai-generated'],
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GetStarted: Story = {
  play: async ({ canvas }) => {
    const link = canvas.getByRole('link', { name: /explore vite/i });
    await expect(link).toHaveAttribute('href', 'https://vite.dev/');
  },
};

export const Incremented: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /count is 0/i }));
    await expect(canvas.getByRole('button', { name: /count is 1/i })).toHaveTextContent('Count is 1');
  },
};

export const CssCheck: Story = {
  play: async ({ canvas }) => {
    // index.css sets `code { font-size: 15px }`. This fails if the shared preview did not load it.
    const code = canvas.getByText('src/App.tsx');
    await expect(getComputedStyle(code).fontSize).toBe('15px');
  },
};
