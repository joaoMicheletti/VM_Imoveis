const connection = require('../database/connection');

module.exports = {
    async Create(request, response) {
        const { cep, rua, casa_numero, vendedor, phone, description} = request.body;
    
        const Data = {
            rua,
            casa_numero,
            cep,
            vendedor, 
            phone,
            description
        };
        console.log(Data);
        
         await connection('imoveis').insert({
            cep,
            rua,
            casa_numero,
            vendedor,
            phone,
            description

        });
        
        return response.json('cadastrado!');
     }
};
