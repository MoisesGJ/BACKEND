const express = require('express');

//routes
const kodersr = require('./routes/koders.router');
const mentoresr = require('./routes/mentores.router');

const app = express();
const port = 3000;

app.use(express.json());

app.use(
  (req, res, next) => {
    console.log('middleware');
    next();
  },
  (req, res, next) => {
    console.log('middleware 2');
    next();
  }
);

app.use('/koders', kodersr);
app.use('/mentores', mentoresr);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
