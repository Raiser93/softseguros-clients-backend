const { Router } = require('express');
const { check } = require('express-validator');
const { validatorFields } = require('../middlewares/validator-fields');
const router = Router();

// Controlador
const clientController = require('../controllers/Client.controller');

module.exports = () => {

    // Ruta para obtener todos los usuarios en estado True
    router.get('/all', clientController.getAllClientsEnable);

    // Ruta para generar un nuevo cliente
    router.post(
        '/create-client',
        [//Middlawares
            check('email', 'El correo es obligatorio').not().isEmpty(),
            check('email', 'El correo ingresado no es valido').isEmail(),
            validatorFields
        ],  
        clientController.createClient
    );

    // Ruta para modificar un cliente
    router.put('/update-client/:id', clientController.updateClient);

    // Ruta para cambiar de estado un cliente
    router.put('/change-status-client/:id', clientController.disableClient);

    // Ruta para cambiar de estado un cliente
    router.get('/search', clientController.searchClient);

    return router;
};