const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.json({ message: 'Bienvenido a GET KODERS' }));

module.exports = router;
