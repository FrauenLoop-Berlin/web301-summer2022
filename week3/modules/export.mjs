/*
To be able to load an ES module, we need to set “type”: “module” in this file or,
as an alternative, we can use the .mjs file extension as against
the usual .js file extension.
https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#examples
https://medium.com/@crohacz_86666/basics-of-modular-javascript-2395c82dd93a
*/

function printName ( name ) {
  console.log(name);
}

const printNameVariable = ( name ) => {
  console.log(name);
}

export function printNumber (number) {
  console.log(number);
}

export { printName, printNameVariable };
