// Sélectionnez l'élément input et le bouton
const userInput = document.getElementById('userInput');
const fetchDataButton = document.getElementById('fetchData');
const myResultElement = document.getElementById('myResult'); // Utilisez le nouvel ID

// Ajoutez un gestionnaire d'événements au bouton pour déclencher la requête AJAX
fetchDataButton.addEventListener('click', async () => {
    const inputValue = userInput.value;

    if (isNaN(inputValue)) {
        alert("Veuillez entrer un nombre valide.");
        return;
    }

    const url = `/api/data/${inputValue}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        myResultElement.innerHTML = `<p>Response: ${JSON.stringify(data)}</p>`;
    } catch (error) {
        console.error('Error:', error);
        myResultElement.innerHTML = `<p>Error: ${error.message}</p>`;
    }
});
const resultElement = document.getElementById('result');

        // Function to make an AJAX request to the server
        async function fetchData(url) {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error:', error);
                return { error: error.message };
            }
        }
                // Button 1 click handler
                document.getElementById('fetchData1').addEventListener('click', async () => {
                    const url = '/api/data/1'; // Endpoint URL with argument
                    const data = await fetchData(url);
                    resultElement.innerHTML = `<p>Data from Button 1: ${JSON.stringify(data)}</p>`;
                });
        
                // Button 2 click handler
                document.getElementById('fetchData2').addEventListener('click', async () => {
                    const url = '/api/data/2'; // Endpoint URL with argument
                    const data = await fetchData(url);
                    resultElement.innerHTML = `<p>Data from Button 2: ${JSON.stringify(data)}</p>`;
                });


