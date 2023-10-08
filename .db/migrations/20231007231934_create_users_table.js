// Migration pour la table 'users'
exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
      table.increments('id').primary();
      table.string('username').notNullable();
      table.string('email').notNullable();
      table.date('registration_date');
    });
  };
  exports.down = function (knex) {
    return knex.schema.dropTable('users');
  };
  