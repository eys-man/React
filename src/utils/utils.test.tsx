import { validateName } from './utils';

test('Validate name', () => {
  expect(validateName('qwerty')).toBe('');
  expect(validateName('qwert')).toBe(
    'The name must contain at least three letters. Numbers and special characters are not allowed.'
  );
});
