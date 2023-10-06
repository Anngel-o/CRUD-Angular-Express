const mongoose = require('mongoose');

const EmpleadoSchema = mongoose.Schema({
    nombre: {
        type: 'string',
        required: true
    },
    apellido: {
        type: 'string',
        required: true
    },
    numero: {
        type: 'string',
        required: true
    },
    salario: {
        type: 'string',
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Empleado', EmpleadoSchema)