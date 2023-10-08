module.exports = {
    development: {
      client: 'postgresql', // ou le client de votre base de données
      connection: {
        host: 'localhost',
        user: 'postgres',
        password: '0000',
        database: 'ma_base_de_donnees',
      },
      migrations: {
        directory: '.db//migrations', // Chemin vers le dossier des migrations
      },
    },
    // ...
  };
  