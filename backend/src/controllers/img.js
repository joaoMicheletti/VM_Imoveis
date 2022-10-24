const connection =require('../database/connection.js');
const express = require('express');
const Rota = express.Router();


module.exports = {
    async Image(request, response ) {
        const File = request.file;
        console.log(File);

        const img_cep = request.headers.image;
        const Upload =  async () =>  {
            await connection('imoveis').where('cep', img_cep).select('image').update('image', File.filename);
        }

        //rota para atualizar o campo image no db.sqlite
         Upload( Rota.put('/upload_img', Upload));
        
        
        return response.json(File.filename);

    }

}
