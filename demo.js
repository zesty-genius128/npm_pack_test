const { capitalize, camelCase, kebabCase, reverse } = require('./index');

console.log('capitalize("hello world"):', capitalize('hello world'));
console.log('camelCase("hello world"):', camelCase('hello world'));
console.log('kebabCase("HelloWorld"):', kebabCase('HelloWorld'));
console.log('reverse("hello"):', reverse('hello')); 