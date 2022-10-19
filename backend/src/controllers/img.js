//const connection =require('../database/connection.js');

module.exports = {
    async Image(request, response ) {
        return response.json(console.log(request.file));
    }
}