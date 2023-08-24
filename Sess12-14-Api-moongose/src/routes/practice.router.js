const { Router } = require('express');
const {
  create,
  getAll,
  findById,
  deleteById,
  update,
} = require('../usecases/practice.usecase');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const practices = await getAll();
    res.json({
      message: 'Request successfully',
      practices: {
        practices,
      },
    });
  } catch (err) {
    res.status(500 || err.status).json({
      message: 'something went wrong',
      error: err.message,
    });
  }
});

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newpractice = await create(data);

    res.json({ message: 'Add practice successfully', practice: newpractice });
  } catch (err) {
    res.status(400).json({
      message: 'something went wrong',
      error: err.message,
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const practice = await findById(id);

    res.json({ message: 'Find practice', practice });
  } catch (err) {
    res.status(500 || err.status).json({
      message: 'something went wrong',
      error: err.message,
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const practice = await deleteById(id);

    res.json({ message: 'Deleted practice', practice });
  } catch (err) {
    res.status(500 || err.status).json({
      message: 'something went wrong',
      error: err.message,
    });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { body, params } = req;

    const practice = await update(params.id, body);

    res.json({ message: 'Updated practice', practice });
  } catch (err) {
    res.status(500 || err.status).json({
      message: 'something went wrong',
      error: err.message,
    });
  }
});

module.exports = router;
