// index.js
console.log("hey hey hey salut à toi mon gazo dams")
// Importez le module Express.js
const express = require('express');

// Créez une application Express
const app = express();

// Définissez une route qui renvoie un message
app.get('/', (req, res) => {
  res.send('Bonjour, ceci est mon application Node.js !');
});

// Démarrez le serveur et écoutez sur un port spécifique (par exemple, 3000)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Le serveur fonctionne sur le port ${port}`);
});
setTimeout(() => {
  console.log("After 5 seconds i appear");
}, 5000);
