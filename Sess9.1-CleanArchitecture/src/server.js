// Todo: Describir y montar el servidor

const express = require('express');

//Routes
const kodersRouter = require('./routes/koders.router');
const mentorsRouter = require('./routes/mentors.router');
const generationsRouter = require('./routes/generations.router');

const app = express();
const port = 3000;

//Middlewares
app.use(express.json());

app.use('/koders', kodersRouter);
app.use('/mentors', mentorsRouter);
app.use('/generations', generationsRouter);

app.get('/', (req, res) => res.json({ message: 'API Kodemia g27js' }));

module.exports = { app, port };
