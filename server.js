const express = require('express');
const dotenv = require('dotenv');

//configuracion incial 
dotenv.config();
const app = express();
app.use(express.json()); 

//Rutas
