const { Sequelize } = require('sequelize');

const dbConfig = new Sequelize(
    'softseguros-clients', // Nombre de base de datos
    'root', // Usuario asignado a la base de datos
    '', // Contraseña asignada a la base de datos
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    }
);

module.exports = dbConfig;