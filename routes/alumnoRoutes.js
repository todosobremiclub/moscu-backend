const express = require('express');
const router = express.Router();
const controller = require('../controllers/alumnoController');
router.get('/', controller.getAlumnos);
router.post('/', controller.crearAlumno);
router.put('/:id', controller.editarAlumno);
router.delete('/:id', controller.eliminarAlumno);
module.exports = router;