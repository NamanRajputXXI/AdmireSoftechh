document.getElementById('popupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Gather form input values
    const name = document.getElementById('nameInput').value;
    const mobile = document.getElementById('mobileInput').value;
    const service = document.getElementById('serviceSelect').value;
  
    // Create a JSON object with the form data
    const userData = {
      name: name,
      mobile: mobile,
      service: service,
      queue:'popup form'
    };
  
    // Make a POST request to send user data in JSON format
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => {
        if (response.ok) {
          return response.json(); // Parse the JSON response
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        console.log('Response from server:', data);
        alert("form filled successfully")
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  });


