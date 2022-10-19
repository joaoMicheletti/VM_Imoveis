const express = require('express');
const routes = express.Router();
const multer = require('multer');
const multeConfig = require('./multer');
 

// importando as functions.
const Search = require('./controllers/Search.js');
const Create = require('./controllers/Create.js');
const Upimg = require('./controllers/img.js');
//rota para buscara os itens no banco de dados.
routes.get('/buscar', Search.Buscar);
// rota para criar itens no banco de dados
routes.post('/create', multer(multeConfig).single("image"), Create.Create);

routes.post('/img', multer(multeConfig).single("image"), Upimg.Image);




module.exports = routes;

