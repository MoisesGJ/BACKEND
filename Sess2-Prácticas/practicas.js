//! Práctica_1
/*
    process.argv.forEach(
    (name, index) => index > 1 && console.log(name.split('').reverse().join(''))
    );
 */

//! Práctica_2
/* 
isNaN(process.argv[2])
  ? console.log('ERROR: Debes ingresar un número válido.') + process.exit(1)
  : console.log(process.argv[2] % 2 === 0 ? 'Es par' : 'Es impar');
 */

//! Práctica_3
/* for (let i = 1; i <= 100; i++) {
  let stringFinal = i + ' ';
  if (i % 3 == 0 && i % 5 == 0) {
    stringFinal += '- FizzBuzz';
  } else if (i % 3 == 0) {
    stringFinal += '- Fizz';
  } else if (i % 5 == 0) {
    stringFinal += '- Buzz';
  }

  console.log(stringFinal);
}
 */

//! Práctica_4
const limit = process.argv[2];

if (isNaN(limit)) {
  console.log('ERROR: Ingrese un número válido.');
  process.exit(1);
}

for (let i = 1; i <= limit; i++) {
  let stringFinal = i + ' ';
  if (i % 3 == 0 && i % 5 == 0) {
    stringFinal += '- FizzBuzz';
  } else if (i % 3 == 0) {
    stringFinal += '- Fizz';
  } else if (i % 5 == 0) {
    stringFinal += '- Buzz';
  }

  console.log(stringFinal);
}

process.exit(0);
