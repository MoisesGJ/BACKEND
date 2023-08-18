const { Router } = require('express');

const router = Router();

router.get('/', (req, res) =>
  res.json({ messgae: 'Hola desde mentores con GET' })
);

module.exports = router;
