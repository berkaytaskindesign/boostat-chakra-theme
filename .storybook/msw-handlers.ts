import type { RequestHandler } from 'msw';

// Nothing in the app fetches during render, so there are no endpoints to mock.
export const mswHandlers: RequestHandler[] = [];
