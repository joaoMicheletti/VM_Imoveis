const connection = require("../database/connection");

module.exports = {
    async Buscar(request, response) {
        const data = await connection('imoveis').select('*');


        return response.json(data);
    }
}