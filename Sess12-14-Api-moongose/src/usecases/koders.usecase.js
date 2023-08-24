const Koder = require('../models/koders.model');
const moongose = require('mongoose');
const createError = require('http-errors');

// GET /koders
async function getAll() {
  const allKoders = await Koder.find();
  return allKoders;
}

// POST /koders
async function create(koderData) {
  // Para validar usamos el mismo create
  // Lanza un objeto de error con propiedades:
  // name: 'ValidationError'
  // message: 'el error' error legible
  const newKoder = await Koder.create(koderData);
  return newKoder;
}

// GET /koders/:id
async function getById(id) {
  // Validar id antes de buscarlo con mongoose.isValidObjectId()
  //

  if (!moongose.isValidObjectId(id)) {
    //throw new Error('Invalid id');
    throw new createError(400, 'Invalid id');
  }

  const koder = await Koder.findById(id);
  return koder;
}

async function deleteById(id) {
  if (!moongose.isValidObjectId(id)) {
    //throw new Error('Invalid id');
    throw new createError(400, 'Invalid id');
  }
  const koderdeleted = await Koder.findByIdAndDelete(id);

  if (!koderdeleted) throw new createError(404, 'Koder not found');

  return koderdeleted;
}

async function update(id, newdata) {
  if (!moongose.isValidObjectId(id)) {
    //throw new Error('Invalid id');
    throw new createError(400, 'Invalid id');
  }

  const koderupdated = await Koder.findByIdAndUpdate(id, newdata, {
    new: true,
  });

  /* if (!koderdeleted) throw new createError(404, 'Koder not found'); */

  return koderupdated;
}

module.exports = {
  getAll,
  create,
  getById,
  deleteById,
  update,
};
