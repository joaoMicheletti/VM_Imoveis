const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();
/*
app.use((req, res, next) => {
    // definindo as url que podem fazer request no backand
    res.header("Acess-Control-Allow-Origin","http://localhost:3000")
    // definindos os methodos 
    res.header("Acess-Control-Allow-Methods", "GET", "POST");
    // definindo o conteudo da req.
    res.header("Acess-Control-Allow-Headers", "X-PINGOTHER", "Content-Type");
    
    next();
})*/
app.use(cors());

app.use(express.json()); 
app.use(routes);

app.listen(2222);