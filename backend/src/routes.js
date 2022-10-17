const express = require('express');
const routes = express.Router();
const multer = require('multer');
const upload = multer({dest: 'public'});

// importando as functions.
const Search = require('./controllers/Search.js');
const Create = require('./controllers/Create.js');

//rota para buscara os itens no banco de dados.
routes.get('/buscar', Search.Buscar);
// rota para criar itens no banco de dados
routes.post('/create', upload.single('image'), Create.Create);

module.exports = routes;

