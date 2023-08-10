const prompt = require('prompt-sync')();

/* const nombre = prompt('¿Cuál es tu nombre? ');

console.log(`¡Hola, ${nombre}!`); */

// ! Práctica 5:

let validate = true;
const names = [];

while (validate) {
  names.push(prompt('¿Cuál es tu nombre? '));

  const nomore = prompt('¿Desea añadir otro nombre? (S/N) ');

  (nomore.toLowerCase() === 'n') | 'no' && (validate = false);
}

const namesCount = (names) => names.length;

const namesDuplicate = (names) => {
  const uniquenames = names.reduce((accum, curr) => {
    return accum.includes(curr) ? accum : [...accum, curr];
  }, []).length;

  return uniquenames !== names.length ? 'Sí' : 'No';
};

const nameLarge = (names) =>
  names.reduce(
    (accum, curr) => (accum.length < curr.length ? (accum = curr) : accum),
    names[0]
  );

const nameShort = (names) =>
  names.reduce(
    (accum, curr) => (accum.length > curr.length ? (accum = curr) : accum),
    names[0]
  );

console.log(
  `\n\n\nNombres totales: ${namesCount(
    names
  )}\n¿Hay nombres repetidos?: ${namesDuplicate(
    names
  )}\nEl nombre más largo es ${nameLarge(
    names
  )}\nEl nombre más corto es ${nameShort(names)}`
);
