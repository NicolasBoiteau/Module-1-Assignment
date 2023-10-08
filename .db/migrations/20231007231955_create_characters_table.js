exports.up = function (knex) {
    return knex.schema.createTable('characters', function (table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('species');
      table.string('homeworld');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('characters');
  };