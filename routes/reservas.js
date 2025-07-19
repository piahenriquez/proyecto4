const express = require('express');
const router = express.Router();
const reservasController = require('../controllers/reservasController');

 
router.get('/', reservasController.obtenerReservas);
router.get('/:id', reservasController.obtenerReservaPorId);
router.put('/:id', reservasController.actualizarReserva);
router.post('/', reservasController.crearReserva);
router.delete('/:id', reservasController.eliminarReserva);

module.exports = router; 