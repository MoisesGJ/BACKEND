const express = require('express');

const router = express.Router();

//Middlewares
router.use((req, res, next) => {
  console.log('middleware de router KODERS');
  next();
});

//Endpoints
router.get(
  '/',
  (req, res, next) => {
    console.log('middleware de router en GET KODERS');
    next();
  },
  (req, res) => res.json({ message: 'Bienvenido a GET KODERS' })
);

module.exports = router;
