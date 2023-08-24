const express = require('express');
const koders = require('../usecases/koders.usecase');

const router = express.Router();

router.get('/', async (request, response) => {
  try {
    const allKoders = await koders.getAll();

    response.json({
      message: 'Koders list',
      data: {
        koders: allKoders,
      },
    });
  } catch (error) {
    response.status(500).json({
      message: 'something went wrong',
      error: error.message,
    });
  }
});

router.post('/', async (request, response) => {
  try {
    const koderData = request.body;
    const newKoder = await koders.create(koderData);

    response.status(201);
    response.json({
      message: 'Koder created',
      data: {
        koder: newKoder,
      },
    });
  } catch (error) {
    /* response.status(400); */
    response.status(error.name === 'ValidationError' ? 400 : 500);

    response.json({
      message: 'something went wrong',
      error: error.message,
    });
  }
});

router.get('/:id', async (request, response) => {
  try {
    const id = request.params.id;
    const koder = await koders.getById(id);

    response.json({
      message: `Koder finded`,
      data: { koder },
    });
  } catch (error) {
    console.log(error.status);
    response.status(error.status || 500).json({
      message: 'something went wrong',
      error: error.message,
    });
  }
});

router.delete('/:id', async (request, response) => {
  try {
    const id = request.params.id;
    const koder = await koders.deleteById(id);

    response.json({
      message: `Koder deleted`,
      data: { koder },
    });
  } catch (error) {
    console.log(error.status);
    response.status(error.status || 500).json({
      message: 'something went wrong',
      error: error.message,
    });
  }
});

router.patch('/:id', async (request, response) => {
  try {
    const newdata = request.body;
    const { id } = request.params;
    const koder = await koders.update(id, newdata, { new: true });

    response.json({
      message: `Koder updated`,
      data: { koder },
    });
  } catch (error) {
    console.log(error.status);
    response.status(error.status || 500).json({
      message: 'something went wrong',
      error: error.message,
    });
  }
});

module.exports = router;
