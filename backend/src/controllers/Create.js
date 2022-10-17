const connection = require('../database/connection');

module.exports = {
    async Create(request, response) {
        const { cep, rua, casa_numero, vendedor, phone, description, image } = request.body;

        const Data = {
            rua,
            casa_numero,
            cep,
            vendedor,
            phone,
            description,
            image
        };
        
        
    
       /* await connection('imoveis').insert({
        
            cep,
            rua,
            casa_numero,
            vendedor,
            phone,
            description
        })*/

        return console.log(Data);
     }
};
