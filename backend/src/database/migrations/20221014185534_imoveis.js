
exports.up = function(knex) {
    return knex.schema.createTable('imoveis', function(table){
        
        table.increments();
        table.string('rua').notNullable();
        table.int('casa_numero').notNullable();
        table.string('cep').notNullable();
        table.string('vendedor').notNullable();
        table.int('phone').notNullable();
        table.string('description').notNullable();
        table.string('image');
        

    });
  
};
exports.down = function(knex) {
    return knex.schema.dropTable('imoveis');
  
};
