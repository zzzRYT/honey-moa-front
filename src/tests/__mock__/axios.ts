import { vitest } from 'vitest';

export default {
  get: vitest.fn(() =>
    Promise.resolve({ data: { message: 'Mocked response' } })
  ),
  post: vitest.fn(() =>
    Promise.resolve({ data: { message: 'Mocked response' } })
  ),
};
