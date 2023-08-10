const koders = [
  {
    id: 1,
    first_name: 'Laurella',
    last_name: 'Tupper',
    age: 42,
    email: 'ltupper0@123-reg.co.uk',
    generation: 2,
  },
  {
    id: 2,
    first_name: 'Daron',
    last_name: 'Cockle',
    age: 18,
    email: 'dcockle1@salon.com',
    generation: 12,
  },
  {
    id: 3,
    first_name: 'Marleen',
    last_name: 'Eller',
    age: 18,
    email: 'meller2@bloglovin.com',
    generation: 11,
  },
  {
    id: 4,
    first_name: 'Worthington',
    last_name: 'Vlach',
    age: 16,
    email: 'wvlach3@taobao.com',
    generation: 22,
  },
  {
    id: 5,
    first_name: 'Wendell',
    last_name: 'Artiss',
    age: 17,
    email: 'wartiss4@microsoft.com',
    generation: 12,
  },
  {
    id: 6,
    first_name: 'Kin',
    last_name: 'Pala',
    age: 55,
    email: 'kpala5@photobucket.com',
    generation: 6,
  },
  {
    id: 7,
    first_name: 'Lucio',
    last_name: 'Bagshawe',
    age: 56,
    email: 'lbagshawe6@behance.net',
    generation: 15,
  },
  {
    id: 8,
    first_name: 'Reggy',
    last_name: 'Bullingham',
    age: 30,
    email: 'rbullingham7@fda.gov',
    generation: 2,
  },
  {
    id: 9,
    first_name: 'Clarinda',
    last_name: 'Steaning',
    age: 52,
    email: 'csteaning8@liveinternet.ru',
    generation: 22,
  },
  {
    id: 10,
    first_name: 'Karolina',
    last_name: 'Leblanc',
    age: 59,
    email: 'kleblanc9@tiny.cc',
    generation: 6,
  },
  {
    id: 11,
    first_name: 'Colet',
    last_name: 'McCuffie',
    age: 60,
    email: 'cmccuffiea@dyndns.org',
    generation: 24,
  },
  {
    id: 12,
    first_name: 'Kimble',
    last_name: 'Dovermann',
    age: 54,
    email: 'kdovermannb@gmail.com',
    generation: 3,
  },
  {
    id: 13,
    first_name: 'Janessa',
    last_name: 'Illing',
    age: 19,
    email: 'jillingc@hubpages.com',
    generation: 6,
  },
  {
    id: 14,
    first_name: 'Lani',
    last_name: 'Ricardo',
    age: 44,
    email: 'lricardod@opensource.org',
    generation: 6,
  },
  {
    id: 15,
    first_name: 'Caye',
    last_name: 'Cowmeadow',
    age: 16,
    email: 'ccowmeadowe@narod.ru',
    generation: 11,
  },
  {
    id: 16,
    first_name: 'Nataline',
    last_name: 'MacInnes',
    age: 28,
    email: 'nmacinnesf@gmail.com',
    generation: 13,
  },
  {
    id: 17,
    first_name: 'Dayna',
    last_name: 'Nimmo',
    age: 17,
    email: 'dnimmog@infoseek.co.jp',
    generation: 12,
  },
  {
    id: 18,
    first_name: 'Sheff',
    last_name: 'Normanville',
    age: 23,
    email: 'snormanvilleh@cisco.com',
    generation: 13,
  },
  {
    id: 19,
    first_name: 'Olivie',
    last_name: 'Bladesmith',
    age: 27,
    email: 'obladesmithi@newyorker.com',
    generation: 6,
  },
  {
    id: 20,
    first_name: 'Ida',
    last_name: 'Jewess',
    age: 50,
    email: 'ijewessj@ca.gov',
    generation: 9,
  },
];

/* const sendMail = (email) => console.log(`Enviado a ${email}`);

// forEach
// Quiero enviar un correo a cada koder

koders.forEach(({ email }) => sendMail(email));

// map
// Necesito Obtener el nombre completo de cada alumno en una sola cadena

console.log(
  koders.map(({ first_name, last_name }) => `${first_name} ${last_name}`)
);

// filter
// quiero saber cuantos koders son menores de edad

console.log(
  `Koders menores de edad: ${koders.filter(({ age }) => age < 18).length}`
);

// find
// Quiero encontrar al koder con id 15
console.log(
  'Koder con ID 15:\n',
  koders.filter(({ id }) => id === 15)
);

// some
// Quiero saber si algunos de los koders tienen correo con gmail

console.log(
  `¿Algunos de los koders tienen correo  con gmail?: ${
    koders.some(({ email }) => email.includes('@gmail')) ? 'Sí' : 'No'
  }.`
);

// every
// Quiero saber si todos los koders son mayores de edad

console.log(
  `¿Todos los koders son mayores de edad?: ${
    koders.every(({ age }) => age > 17) ? 'Sí' : 'No'
  }.`
);

// reduce
// Quiero saber la cuenta de koders por generación

console.log(
  `Koders por generación: ${koders.reduce((accum) => (accum += 1), 0)}`
); */

// ! Practíca 6: Con reduce

// forEach
// Quiero enviar un correo a cada koder

const sendMail = (email) => console.log(`Enviado correctamente a ${email}`);

koders.reduce((accum, { email }) => sendMail(email));

// map
// Necesito Obtener el nombre completo de cada alumno en una sola cadena

console.log(
  'Lista de nombres completos:\n',
  koders.reduce(
    (accum, { first_name, last_name }) => [
      ...accum,
      `${first_name} ${last_name}`,
    ],
    []
  )
);

// filter
// quiero saber cuantos koders son menores de edad

console.log(
  `Koders menores de edad: ${koders.reduce(
    (accum, { age }) => (age < 18 ? (accum += 1) : accum),
    0
  )}`
);

// find
// Quiero encontrar al koder con id 15
console.log(
  'Koder con ID 15:',
  koders.reduce(
    (accum, curr) =>
      curr.id === 15 ? (accum = `${curr.first_name} ${curr.last_name}`) : accum,
    ''
  )
);

// some
// Quiero saber si algunos de los koders tienen correo con gmail

console.log(
  `¿Algunos de los koders tienen correo  con gmail?: ${
    koders.reduce(
      (accum, { email }) => (email.includes('@gmail') ? (accum = true) : accum),
      false
    )
      ? 'Sí'
      : 'No'
  }.`
);

// every
// Quiero saber si todos los koders son mayores de edad

console.log(
  `¿Todos los koders son mayores de edad?: ${
    koders.reduce(
      (accum, { age }) => (age > 17 ? accum : (accum = false)),
      true
    )
      ? 'Sí'
      : 'No'
  }.`
);

// reduce
// Quiero saber la cuenta de koders por generación

const orderObj = (obj) =>
  Object.keys(obj)
    .sort((a, b) => a.replace('g', '') - b.replace('g', ''))
    .map((key) => {
      let newobj = {};
      newobj[key] = obj[key];
      return newobj;
    });

console.log(
  'Cuenta de alumnos por generación:\n',
  orderObj(
    koders.reduce((accum, { generation }) => {
      const gen = `g${generation}`;

      accum[gen] = (accum[gen] ?? 0) + 1;

      return accum;
    }, {})
  )
);
