const ClientModel = require('../models/Client.model');

// Obtener todos los usuarios con estado en True
exports.getAllClientsEnable = async (req, res) => {
    try {
        const clients = await ClientModel.findAll({
            attributes: ['id', 'name', 'email', 'date_birth', 'createdAt'],
            where: {
                status: true
            }
        });
        res.status(200).json({
            ok: true,
            clients
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Ocurrio un error al tratar de obtener los clientes',
            error
        })
    }
}

// Generar un nuevo cliente
exports.createClient = async (req, res) => {
    const {
        name,
        document_number,
        email,
        date_birth
    } = req.body;
    try {
        const client = await ClientModel.create( { name, document_number, email, date_birth } );
        res.status(201).json({
            ok: true,
            client
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Ocurrio un error al tratar de generar un nuevo cliente',
            error: error
        });
    }
}

// Modificar cliente
exports.updateClient = async(req, res) => {
    const {
        name,
        document_number,
        email,
        date_birth
    } = req.body;
    const { id } = req.params;
    try {

        const client = await ClientModel.update({name, document_number, email, date_birth}, {
            where: {
                id
            }
        });

        res.status(200).json({
            ok: true,
            client
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Ocurrio un error al tratar de modificar un cliente',
            error: error
        });
    }
}

// Deshabilitar un cliente
exports.disableClient = async (req, res) => {
    const { id } = req.params;
    try {
        const client = await ClientModel.update({status: false}, {
            where: {
                id
            }
        });

        res.status(200).json({
            ok: true,
            client
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Ocurrio un error al tratar de cambiar de estado un cliente',
            error: error
        });
    }
}