const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.json({ message: 'Hola desde generaciones' }));

module.exports = router;
