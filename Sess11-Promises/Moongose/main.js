const mongoose = require('mongoose');

// Esquema - Schema
// Es el que define la forma de un documento

const koderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
  },
  age: {
    type: Number,
    required: true,
    min: 13,
    max: 200,
  },
});

// Modelo - Model
// Generador de documentos de acuerdo al esquema
const Koder = mongoose.model('koders', koderSchema);

async function main() {
  await mongoose.connect('');

  /* await Koder.create({
    name: 'JuanitoMongoose',
    age: 15,
  }); */

  const allkoders = await Koder.find();

  console.log('All:', allkoders);
}

main()
  .then(() => console.log('DONE'))
  .catch((err) => console.error(err));
