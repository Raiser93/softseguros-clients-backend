// Librerias
const express = require('express');
const global = require('./global/environment');
const cors = require('cors');

// Base de datos
const dbConfig = require('./config/db');

// Importar rutas cliente
const routerClient = require('./router/Client.router');

// Importar modelo
require('./models/Client.model');

// Crear conexion a la base de datos
dbConfig.sync().then(() => {
    console.log('DB on');
})
.catch(err => {
    console.log(err);
});

// Crear app express
const app = express();

// CORS
app.use(cors());

// Lectura y parseo del body
app.use( express.json() );

// Asignar ruta cliente
app.use('/api/client', routerClient());

// Iniciar servidor
app.listen(global.PORT, () => {
    console.log('Server ON', global.PORT);
});