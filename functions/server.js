const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const serverless = require('serverless-http');
const routerIndex = require('../routers/index.js');
const DB = require('../models/saborSolidario-mongodb.js');

dotenv.config({ path: '../.env' });

const PORT = process.env.PORT ?? 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public', { extensions: ['html', 'htm', 'js'] }));

DB.connectDB();
const server = app.listen(PORT, () =>
  console.log(`Servidor Express escuchando en el puerto ${PORT}`)
);
server.on('error', (error) =>
  console.log(
    `Se produjo un error al intentar iniciar el servidor Express: ${error.message}`
  )
);

app.use('/.netlify/functions/server', routerIndex);
module.exports.handler = serverless(app);
