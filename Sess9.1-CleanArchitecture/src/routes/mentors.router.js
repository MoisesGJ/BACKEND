const { Router } = require('express');
const mentors = require('../use-cases/mentors.usecase');

const router = Router();

router.get('/', (req, res) => {
  const allmentors = mentors.getAll();
  res.json({ message: 'GET /mentores', mentors: allmentors });
});

router.post('/', (req, res) => {
  const { name, email, program, generation } = req.body;

  mentors.create(name, email, program, generation);

  res.json({ message: 'POST /mentores', status: 'Mentor created' });
});

router.delete('/:name', (req, res) => {
  const { name } = req.params;

  mentors.remove(name);

  res.json({ message: 'DELETE /mentores', status: 'Mentor deleted' });
});

module.exports = router;
