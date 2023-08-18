const { getData, updateData } = require('../lib/db');

function create(name, email, program, generation) {
  const newmentor = {
    name,
    email,
    program,
    generation,
  };

  const data = getData();

  data.mentors.push(newmentor);

  updateData(data);
}

function remove(name) {
  const data = getData();

  const newmentorslits = data.mentors.filter((mentor) => mentor.name !== name);
  data.mentors = newmentorslits;

  updateData(data);
}

function getAll() {
  const data = getData();
  return data.mentors;
}

module.exports = { create, remove, getAll };
