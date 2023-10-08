// Migration pour la table 'films'
exports.up = function (knex) {
    return knex.schema.createTable('films', function (table) {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.integer('release_year');
      table.string('director');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('films');
  };
  