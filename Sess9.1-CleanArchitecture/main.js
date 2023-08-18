// Todo: Iniciar aplicación

const { app, port } = require('./src/server');
const { createIfNotExists } = require('./src/lib/db');

createIfNotExists();

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
