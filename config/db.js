const { Sequelize } = require('sequelize');

// Instancia para generar conexión a la base de datos
const dbConfig = new Sequelize(
    'softseguros-clients', // Nombre de base de datos
    'root', // Usuario asignado a la base de datos
    'admin', // Contraseña asignada a la base de datos
    {
        host: 'localhost', // Host o direccion de alojamineto de la base de datos
        port: 3306, // Puerto
        dialect: 'mysql', // Motor de base de datos a usar
        logging: false
    },
);

// Se exporta la instancia
module.exports = dbConfig;