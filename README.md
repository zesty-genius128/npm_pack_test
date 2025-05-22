# string-utils-demo

A simple npm package providing handy string utility functions: `capitalize`, `camelCase`, `kebabCase`, and `reverse`.

## Installation

```
npm install string-utils-demo
```

## Usage

```js
const { capitalize, camelCase, kebabCase, reverse } = require('string-utils-demo');

console.log(capitalize('hello')); // 'Hello'
console.log(camelCase('hello world')); // 'helloWorld'
console.log(kebabCase('HelloWorld')); // 'hello-world'
console.log(reverse('hello')); // 'olleh'
```

## Testing

```
npm test
```