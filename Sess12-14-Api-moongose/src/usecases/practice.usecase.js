const mongoose = require('mongoose');
const createError = require('http-errors');

const Practice = require('../models/practice.model');

async function getAll() {
  return await Practice.find();
}

async function create(data) {
  return await Practice.create(data);
}

async function findById(id) {
  if (!mongoose.isValidObjectId(id))
    throw new createError(400, 'ID is not valid');

  const practice = await Practice.findById(id);

  if (!practice) throw new createError(404, 'Practice is not found');

  return practice;
}

async function deleteById(id) {
  if (!mongoose.isValidObjectId(id))
    throw new createError(400, 'ID is not valid');

  const practice = await Practice.findByIdAndDelete(id);

  if (!practice) throw new createError(404, 'Practice is not found');

  return practice;
}

async function update(id, newdata) {
  if (!mongoose.isValidObjectId(id))
    throw new createError(400, 'ID is not valid');

  const practice = await Practice.findByIdAndUpdate(id, newdata, { new: true });

  if (!practice) throw new createError(404, 'Practice is not found');

  return practice;
}

module.exports = { create, getAll, findById, deleteById, update };
