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

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'HTML', 'index.html'));
});

function generateResponse(number) {
    const square = number * number;
    const cube = number * number * number;

    return {
        number: number,
        square: square,
        cube: cube
    };
}

app.get('/api/data/:number', (req, res) => {
    const number = parseInt(req.params.number);
    const result = generateResponse(number);
    res.json(result);
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});

module.exports = { generateResponse };
