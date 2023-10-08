exports.up = function (knex) {
    return knex.schema.createTable('films', function (table) {
      table.increments('id').primary();
      table.string('title');
      table.integer('release_year');
      table.string('director');t;
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('films');
  };
  