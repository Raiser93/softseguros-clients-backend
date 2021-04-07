const { Router } = require('express');
const router = Router();

// Controlador
const clientController = require('../controllers/Client.controller');

module.exports = () => {

    // Ruta para obtener todos los usuarios en estado True
    router.get('/all', clientController.getAllClientsEnable);

    // Ruta para generar un nuevo cliente
    router.post('/create-client', clientController.createClient);

    // Ruta para modificar un cliente
    router.put('/update-client/:id', clientController.updateClient);

    // Ruta para cambiar de estado un cliente
    router.put('/change-status-client/:id', clientController.disableClient);

    return router;
};