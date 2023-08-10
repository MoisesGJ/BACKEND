// ! Práctica: Copiar archivo

const { copyFileSync } = require('node:fs');

copyFileSync('file.txt', 'copia-file.txt');
