// Librerias
const express = require('express');
const global = require('./global/environment');
const bodyParser = require('body-parser');

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

// Habilitar body-parser para leer info de los formularios
app.use(bodyParser.urlencoded({extended: true}));

// Asignar ruta cliente
app.use('/client', routerClient());

// Iniciar servidor
app.listen(global.PORT, () => {
    console.log('Server ON', global.PORT);
});