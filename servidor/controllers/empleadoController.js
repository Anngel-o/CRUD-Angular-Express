const Empleado = require("../models/Empleado");

exports.crearEmpleado = async (req, res) => {
    try {
        let empleado;

        //Crear empleado
        empleado = new Empleado(req.body);
        await empleado.save();
        res.send(empleado);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.find();
        res.json(empleados);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarEmpleado = async (req, res) => {
    try {
        const {nombre, apellido, numero, salario} = req.body;
        let empleado = await Empleado.findById(req.params.id);

        if (!empleado) {
            res.status(404).json({msg: 'No se encontró el empleado'});
        }

        empleado.nombre = nombre;
        empleado.apellido = apellido;
        empleado.numero = numero;
        empleado.salario = salario;

        empleado = await Empleado.findOneAndUpdate({_id: req.params.id}, empleado, {new: true});
        res.json(empleado);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerEmpleado = async (req, res) => {
    try {
        let empleado = await Empleado.findById(req.params.id);

        if (!empleado) {
            res.status(404).json({msg: 'No se encontró el empleado'});
        }

        res.json(empleado);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarEmpleado = async (req, res) => {
    try {
        let empleado = await Empleado.findById(req.params.id);

        if (!empleado) {
            res.status(404).json({msg: 'No se encontró el empleado'});
        }

        await Empleado.findOneAndRemove({_id: req.params.id});
        res.json({msg: 'Empleado eliminado con éxito'});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}