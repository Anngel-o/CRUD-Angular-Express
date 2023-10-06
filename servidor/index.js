const express = require('express');
const conectarDB = require('./config/database');
const cors = require("cors");
//Creamos el servidor
const app = express(); 
//Conectamos a la DB
conectarDB();

app.use(cors());
app.use(express.json());//habilitar el uso de json
app.use('/api/empleados', require('./routes/empleado'));

//Definimos ruta principal
// app.get('/', (req, res) => {
//     res.send("Hola js");
// });
app.listen(4000, ()=>{
    console.log("Servidor corriendo");
});