const { getData, updateData } = require('../lib/db');

function create(name, email, program, generation) {
  const newkoder = {
    name,
    email,
    program,
    generation,
  };

  const data = getData();

  data.koders.push(newkoder);

  updateData(data);
}

function remove(name) {
  const data = getData();

  const newkoderslits = data.koders.filter((koder) => koder.name !== name);
  data.koders = newkoderslits;

  updateData(data);
}

function getAll() {
  const data = getData();
  return data.koders;
}

module.exports = { create, remove, getAll };
