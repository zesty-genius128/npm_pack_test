const { capitalize, camelCase, kebabCase, reverse } = require('./index');

test('capitalize capitalizes the first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('Hello')).toBe('Hello');
  expect(capitalize('')).toBe('');
});

test('camelCase converts string to camelCase', () => {
  expect(camelCase('hello world')).toBe('helloWorld');
  expect(camelCase('Hello_world')).toBe('helloWorld');
  expect(camelCase('alreadyCamel')).toBe('alreadyCamel');
});

test('kebabCase converts string to kebab-case', () => {
  expect(kebabCase('hello world')).toBe('hello-world');
  expect(kebabCase('HelloWorld')).toBe('hello-world');
  expect(kebabCase('already-kebab')).toBe('already-kebab');
});

test('reverse reverses a string', () => {
  expect(reverse('hello')).toBe('olleh');
  expect(reverse('')).toBe('');
}); 