const {  DataTypes } = require('sequelize');
const dbConfig = require('../config/db');

const User = dbConfig.define('client', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    document_number: {
        type: DataTypes.CHAR,
        allowNull: false,
        unique: {
            msg: 'El documento ya fue registrado'
        }
    },
    name: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    email: {
        type: DataTypes.CHAR,
        allowNull: false,
        unique: {
            msg: 'El correo ya fue registrado'
        }
    },
    date_birth: {
        type: DataTypes.DATE,
        allowNull: false
    },
});

module.exports =  User;