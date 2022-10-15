const connection = require('../database/connection');

module.exports = {
    async Create(request, response) {
        const { cep, rua, casa_numero, vendedor, phone, description } = request.body;
        
        
    
        await connection('imoveis').insert({
        
            cep,
            rua,
            casa_numero,
            vendedor,
            phone,
            description
        })

        return response.json({vendedor});
     }
};
