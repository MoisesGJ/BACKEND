const { readFileSync } = require('node:fs');

const filename = 'names.txt';

const data = readFileSync(filename, { encoding: 'utf-8' });

const dataarr = JSON.parse(data);

console.log(dataarr);
