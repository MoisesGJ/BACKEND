process.argv.forEach(
  (name, index) => index > 1 && console.log(`Hola, ${name}`)
);

//Información métodos que se usan en js del cliente
//console.log(global);
//console.log(globalThis);

//Información del proceso donde corre este script
//console.log(process);

/*Información del proceso donde corre este script 
    => Argumentos dados al ejecutar:
        node hola.js Moises
*/
//console.log(process.argv);
