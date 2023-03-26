export function validateName(name: string): string {
  const regex = /[A-Za-z]{6,}/;

  return !regex.test(name)
    ? 'The name must contain at least three letters. Numbers and special characters are not allowed.'
    : '';
}
