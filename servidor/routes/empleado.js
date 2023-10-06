//Rutas para empleado
const express = require('express'); //acceder a los ruteos
const router = express.Router();
const empleadoController = require('../controllers/empleadoController');

//api/empleados
router.post('/', empleadoController.crearEmpleado);
router.get('/', empleadoController.obtenerEmpleados);
router.put('/:id', empleadoController.actualizarEmpleado);
router.get('/:id', empleadoController.obtenerEmpleado);
router.delete('/:id', empleadoController.eliminarEmpleado);

module.exports = router;