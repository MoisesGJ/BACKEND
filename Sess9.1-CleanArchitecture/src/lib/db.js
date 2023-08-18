const { existsSync, writeFileSync, readFileSync } = require('node:fs');
const filepath = 'db.json';

const defaultdb = {
  koders: [],
  mentors: [],
  generation: [],
};

function createIfNotExists() {
  if (existsSync(filepath)) {
  } else {
    writeFileSync(filepath, JSON.stringify(defaultdb), { encoding: 'utf-8' });
  }
}

function getData() {
  return JSON.parse(readFileSync(filepath, { encoding: 'utf-8' }));
}

function updateData(newdata) {
  writeFileSync(filepath, JSON.stringify(newdata), { encoding: 'utf-8' });
}

module.exports = { createIfNotExists, getData, updateData };
