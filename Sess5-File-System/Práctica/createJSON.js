const { writeFileSync } = require('node:fs');

const filename = 'names.txt';

const data = [{ name: 'moi' }, { name: 'moi2' }];

const datastring = JSON.stringify(data);

writeFileSync(filename, datastring, { encoding: 'utf-8' });
