const { Router } = require('express');
const koders = require('../use-cases/koders.usecase');

const router = Router();

router.get('/', (req, res) => {
  const allkoders = koders.getAll();
  res.json({ message: 'GET /koders', koders: allkoders });
});

router.post('/', (req, res) => {
  const { name, email, program, generation } = req.body;

  koders.create(name, email, program, generation);

  res.json({ message: 'POST /koders', status: 'Koder created' });
});

router.delete('/:name', (req, res) => {
  const { name } = req.params;

  koders.remove(name);

  res.json({ message: 'DELETE /koders', status: 'Koder deleted' });
});

module.exports = router;
