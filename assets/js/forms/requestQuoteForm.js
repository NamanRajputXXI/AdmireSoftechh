//   For the request a quote form 

document.getElementById('requestQuoteForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    
    const name = document.getElementById('requestQuoteFormName').value;
    const mobile = document.getElementById('requestQuoteFormMobile').value;
    const email = document.getElementById('requestQuoteFormEmail').value;
    const service = document.getElementById('requestQuoteFormSelect').value;
    const textMessage = document.getElementById('requestQuoteFormTextMessage').value;
  
    // Create a JSON object with the form data
    const userData = {
      name: name,
      mobile: mobile,
      email:email,
      service: service,
      textMessage:textMessage,
      queue:'request a quote form'
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
        alert(" request quote form filled successfully")
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
});
