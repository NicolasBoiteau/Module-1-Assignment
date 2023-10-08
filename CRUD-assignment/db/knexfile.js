module.exports = {
    development: {
      client: 'postgresql',
      connection: {
        host: 'localhost',
        user: 'postgres',
        password: '831411',
        database: 'madb',
      },
    },
    migrations: {
      directory: './db/migrations', 
    },
    seeds: {
      directory: './db/seeds', 
    },
  };
  