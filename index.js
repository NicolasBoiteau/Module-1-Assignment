const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3500;
const knexfile = require('.db/knexfile.js'); // Importez votre fichier de configuration Knex ici
const knex = require('knex')(knexfile.development);
app.locals.knex = knex;
app.use(express.static('public'));
app.use(express.json());

// Middleware to disable caching
app.use((req, res, next) => {
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Pragma', 'no-cache');
    res.header('Expires', '0');
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'HTML', 'tempo.html'));
});


app.post('/films', async (req, res) => {
    try {
      const{
            title,
            release_yeear,
            director,
      }=req.body
    
    const newFilms = await knex('patients').insert({
        title,
        release_yeear,
        director,
        }).returning('*');
        res.json(newPatient);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create a new patient record.' });
    }
  });
  
  
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});

