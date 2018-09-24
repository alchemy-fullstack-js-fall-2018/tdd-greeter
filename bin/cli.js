/* eslint no-console: off */
const { greet } = require('../lib/pleasantries');

const name = process.argv[2];

const greeting = greet(name);

console.log(greeting);

