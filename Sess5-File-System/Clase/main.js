const { writeFileSync, existsSync, readFileSync } = require('node:fs');

writeFileSync('file.txt', '¡Hola desde NODE!', { encoding: 'utf-8' });

console.log(
  existsSync('file.txt')
    ? 'Creado correctamente' && readFileSync('file.txt', { encoding: 'utf-8' })
    : 'Hay un error'
);
