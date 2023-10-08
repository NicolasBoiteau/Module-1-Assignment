exports.up = function (knex) {
    return knex.schema.createTable('ratings', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.integer('film_id').unsigned().references('id').inTable('films'); // Assurez-vous que la table 'films' existe
      table.integer('rating');
      table.text('review');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('ratings');
  };