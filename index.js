const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3500;

app.use(express.static('public'));
// Middleware to disable caching
app.use((req, res, next) => {
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Pragma', 'no-cache');
    res.header('Expires', '0');
    next();
});

// Define the directory containing your static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Define the route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'HTML', 'index.html'));
});
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
  });
  // Fonction pour générer une réponse JSON
function generateResponse(number) {
    const square = number * number;
    const cube = number * number * number;

    return {
        number: number,
        square: square,
        cube: cube
    };
}
// Endpoint : "/api/data/:number"
app.get('/api/data/:number', (req, res) => {
    // Récupérez le nombre depuis les paramètres de l'URL
    const number = parseInt(req.params.number);

    // Utilisez une fonction pour générer une réponse JSON
    const result = generateResponse(number);

    // Envoyez la réponse JSON au client
    res.json(result);
});
module.exports = { generateResponse };

