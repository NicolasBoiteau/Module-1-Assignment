
document.addEventListener('DOMContentLoaded', () => {
    const createfilmForm = document.getElementById('createfilmstForm');
    const updatefilmForm = document.getElementById('updatefilmForm');
    /*const deletePatientForm = document.getElementById('deletePatientForm');
    const searchPatientForm = document.getElementById('searchPatientForm');
    const searchPatientId = document.getElementById('searchPatientId');
    const patientList = document.getElementById('patientList');
    const messageContainer = document.getElementById('messageContainer');*/

    // Event listener for creating a new patient
    createfilmForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Extract patient data from the form inputs
        const title = document.getElementById('title').value;
        const release_year = document.getElementById('release_year').value;
        const director = document.getElementById('director').value;


        // Send a POST request to create a new patient
        try {
            const response = await fetch('/films', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: title,
                    director: director,
                    release_year: parseInt(release_year),
                }),
            });

            if (response.ok) {
                const newfilms = await response.json();
                // Display the newly created patient in the list
                
                createfilmForm.reset();
            } else {
                console.error('Failed to create a new patient.');
            }
        } catch (error) {
            console.error('Error:', error);         
        }
    });

// Read endpoint (e.g., get film by ID)

  
updatefilmForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Extract film data from the form inputs
    const filmIdToUpdate = document.getElementById('filmIdToUpdate').value;
    const updatedtitle = document.getElementById('updatedtitle').value;
    const updatedrelease_year = document.getElementById('updatedrelease_year').value;
    const updateddirector = document.getElementById('updateddirector').value;
  
    
        // Send a PUT request to update an existing film
        try {
            const response = await fetch(`/films/${filmIdToUpdate}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: updatedtitle,
                    director: updateddirector,
                    release_year: parseInt(updatedrelease_year),
                }),
            });
    
            if (response.ok) {
                console.log(`film with ID ${filmIdToUpdate} updated successfully!`, 'success');
                updatefilmForm.reset();
            } else {
                console.log('Failed to update the film.');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    });
    
    
        const deleteFilmForm = document.getElementById('deleteFilmForm');
    
        // Event listener for deleting a film
        deleteFilmForm.addEventListener('submit', async (e) => {
            e.preventDefault();
    
            // Extract film ID to delete from the form input
            const filmIdToDelete = document.getElementById('filmIdToDelete').value;
    
            // Send a DELETE request to delete the film
            try {
                const response = await fetch(`/films/${filmIdToDelete}`, {
                    method: 'DELETE',
                });
    
                if (response.ok) {
                    console.log(`Film with ID ${filmIdToDelete} deleted successfully!`);
                    deleteFilmForm.reset();
                } else {
                    console.log('Failed to delete the film.');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
     
});
