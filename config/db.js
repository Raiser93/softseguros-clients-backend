const { Sequelize } = require('sequelize');

// Instancia para generar conexión a la base de datos
const dbConfig = new Sequelize(
    'heroku_bdac18e5d7a1e2d', // Nombre de base de datos
    'b3d9fddd233e9e', // Usuario asignado a la base de datos
    '4f858335', // Contraseña asignada a la base de datos
    {
        host: 'us-cdbr-east-03.cleardb.com', // Host o direccion de alojamineto de la base de datos
        port: 3306, // Puerto
        dialect: 'mysql', // Motor de base de datos a usar
        logging: false
    },
);

// Se exporta la instancia
module.exports = dbConfig;