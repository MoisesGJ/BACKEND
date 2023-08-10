const { writeFileSync } = require('node:fs');

writeFileSync(process.env.HOME + '/file.txt', '¡Hola desde NODE!', {
  encoding: 'utf-8',
});

//console.log(filename ? 'Creado correctamente' : 'Hay un error');
