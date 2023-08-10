const { readFileSync } = require('node:fs');

const content = readFileSync('file.txt', { encoding: 'utf-8' });

console.log(`Content: ${content}`);
