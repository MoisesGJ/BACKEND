const express = require('express');

//Routes
const kodersrouter = require('./routes/koders.router');
const mentoresrouter = require('./routes/mentores.router');
const generacionesrouter = require('./routes/generaciones.router');

const app = express();
const port = 5813;

app.use(express.json());

app.use('/koders', kodersrouter);
app.use('/mentores', mentoresrouter);
app.use('/generaciones', generacionesrouter);

app.get('/', (req, res) => res.json({ message: 'Kodemia API v0.0.1' }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
