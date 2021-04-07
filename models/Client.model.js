const {  DataTypes } = require('sequelize');
const dbConfig = require('../config/db');

// Se genera modelo de clientes
const Client = dbConfig.define('client', {
    // Se asigna un id como llave primaria
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // Número de documento
    document_number: {
        type: DataTypes.CHAR,
        allowNull: false,
        unique: {
            msg: 'El documento ya fue registrado'
        }
    },
    // Nombre completo
    name: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    // Email
    email: {
        type: DataTypes.CHAR,
        allowNull: false,
        validate: {
            isEmail: {
                msg: 'Agrega un Email válido'
            },
            notEmpty: {
                msg: 'El Email no puede ir vacio'
            }
        },
        unique: {
            msg: 'El correo ya fue registrado'
        }
    },
    // Fecha de nacimiento
    date_birth: {
        type: DataTypes.DATE,
        allowNull: false
    },
    // Estado del cliente
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

// Se exporta el modelo
module.exports =  Client;