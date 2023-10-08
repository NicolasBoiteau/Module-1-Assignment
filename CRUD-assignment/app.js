const express = require('express');
const app = express();
const port = process.env.PORT || 3500; // Use the environment variable or port 3500

//const knex = require('./db/knexfile.js'); 
// Import the knexfile and knex instance
const knexfile = require('./db/knexfile');
const knex = require('knex')(knexfile.development);

// Attach the knex instance to the app
app.locals.knex = knex;
app.use(express.json());
// Serve static files from the "public" directory
app.use(express.static('public'));

// Create endpoint
app.post('/films', async (req, res) => {
    try {
      const {
        title,
        release_year,
        director,
      } = req.body;
  
      const newfilms = await knex('films').insert({
        title,
        release_year,
        director,
      }).returning('*');
  
      res.json(newfilms);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create a new films record.' });
    }
  });
    // Read endpoint (e.g., get patient by ID)

    app.get('/films', async (req, res) => {
      try {
        const { director } = req.query; // Assuming you pass the director as a query parameter
    
        // Perform a SELECT query to retrieve films by director
        const films = await knex('films').where('director', director);
    
        // Return a JSON response containing the result
        res.json(films);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve films.' });
      }
    });
  // Update endpoint
// Update endpoint for films
app.put('/films/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const {
          title,
          director,
          release_year,
      } = req.body;

      // Mise à jour du film dans la base de données avec Knex
      const updatedFilm = await knex('films')
          .where('id', id)
          .update({
              title,
              director,
              release_year,
          })
          .returning('*'); // Renvoyer les données mises à jour

      if (updatedFilm.length > 0) {
          res.json(updatedFilm[0]); // Renvoyer les données du film mis à jour
      } else {
          res.status(404).json({ error: 'Film not found.' });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update the film.' });
  }
});

//start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// Delete endpoint for films
app.delete('/films/:id', async (req, res) => {
  try {
      const { id } = req.params;

      // Suppression du film dans la base de données avec Knex
      const deletedFilm = await knex('films')
          .where('id', id)
          .del()
          .returning('*'); // Renvoyer les données supprimées

      if (deletedFilm.length > 0) {
          res.json({ success: true });
      } else {
          res.status(404).json({ error: 'Film not found.' });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete the film.' });
  }
});
