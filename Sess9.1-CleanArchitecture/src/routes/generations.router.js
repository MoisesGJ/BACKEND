const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.json({ message: 'GET /generations' }));

module.exports = router;
