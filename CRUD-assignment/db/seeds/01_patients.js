exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('films')
      .del()
      .then(function () {
        // Inserts seed entries
        return knex('films').insert([
          {
            title: 'Star wars 1',
            release_year: '2001',
            director: 'George Lucs',
          },
        ]);
      });
  };
  