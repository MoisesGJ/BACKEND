const fs = require('node:fs');

const dir = process.env.HOME + '/CarpetaConFs';

fs.existsSync(dir) || fs.mkdirSync(dir);

fs.writeFileSync(dir + '/file.txt', 'Hola');

console.log(fs.readdirSync(dir));

fs.rmdirSync(dir, { recursive: true });

console.log(fs.existsSync(dir));
