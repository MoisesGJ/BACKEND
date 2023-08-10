const { writeFileSync, appendFileSync } = require('node:fs');

writeFileSync('count.txt', 'CONTADOR:\n', { encoding: 'utf-8' });

console.log(existsSync('file.txt') ? 'Creado correctamente' : 'Hay un error');

appendFileSync('file.txt', '¡Hola, Koder!', { encoding: 'utf-8' });

/* for (let i = 0; i <= 1; i++)
  appendFileSync('saludar.txt', '¡Hola, Koder!', 'utf8'); */
