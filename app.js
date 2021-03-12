/* vamos a incluir todas las dependencias */
const express = require('express');
const jwt = require('jsonwebtoken');

/* creamos la app con express */
const app = express();

/* incluimos el archivo de start.js pasamos el parametro app */
const start = require('./system/core/start')(app);