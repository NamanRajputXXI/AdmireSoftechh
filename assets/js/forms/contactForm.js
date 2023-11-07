 //for the contact form


 document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.getElementById("contactFormName").value
    const email = document.getElementById("contactFormEmail").value
    const textMessage = document.getElementById("contactFormTextMessage").value
    const userData = {
        name: name,  
        email:email, 
        textMessage:textMessage,
        queue:'contact form'
      };
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
    

    })
