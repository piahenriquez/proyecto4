const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

//configuracion incial 
dotenv.config();
const app = express();

app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

//Rutas de reservas 
const reservasRoutes = require('./routes/reservas');
app.use('/api/reservas', reservasRoutes);

//ruta 
app.get('/', (req, res) => {
    res.send('API de Reservas funcionando correctamente');
});

//definir el puerto
const PORT = process.env.PORT || 3000;

//iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});