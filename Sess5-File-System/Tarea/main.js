const fs = require('node:fs');

if (!process.argv[2]) {
  console.log('Error: Debe ingresar por lo menos un argumento.');
  process.exit(1);
}

const arg = process.argv[2];

const dir = 'koders.json';

const initFile = (dir) => fs.writeFileSync(dir, '[]', { encoding: 'utf-8' });

fs.existsSync(dir) || initFile(dir);

const datastring = fs.readFileSync(dir, { encoding: 'utf-8' });

const data = JSON.parse(datastring);

let newdata;

switch (arg.toLowerCase()) {
  case 'add':
    if (!process.argv[3]) {
      console.log(
        'Error: Debe ingresar el nombre del koder en el segundo argumento.'
      );
      process.exit(1);
    }

    newdata = [...data];

    process.argv.forEach(
      (name, index) => index > 2 && newdata.push({ name: name })
    );

    break;
  case 'ls':
    data.forEach((koder) => console.log(koder));
    break;
  case 'rm':
    if (!process.argv[3]) {
      console.log(
        'Error: Debe ingresar el nombre del koder en el segundo argumento.'
      );
      process.exit(1);
    }

    newdata = [...data];

    process.argv.forEach((name, index) => {
      if (index > 2) {
        if (!newdata.find((koder) => koder.name === name)) {
          console.log(
            `Error: Parece que "${name}" aún no se ha registado. NO se ha eliminado nada.`
          );
          process.exit(1);
        }
        newdata = newdata.filter((koder) => koder.name !== name);
      }
    });

    break;
  case 'reset':
    initFile(dir);

    break;
  default:
    console.log('Error: ¡Revisa el argumento que proporcionaste!');
    process.exit(1);
}

newdata &&
  fs.writeFileSync(dir, JSON.stringify(newdata), {
    encoding: 'utf-8',
  });

console.log(`\n¡La operación [${arg}] ha sido un éxito!\n`);
