const { Router } = require('express');

const router = Router();

//Middlewares
router.use((req, res, next) => {
  console.log('Middleware de mentores');
  next();
});

router.get('/', (req, res) =>
  res.json({ messgae: 'Hola desde mentores con GET' })
);

module.exports = router;
