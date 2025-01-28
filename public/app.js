document.addEventListener('DOMContentLoaded', function() {
    // Find the form element
    const form = document.querySelector('form');
  
    // Add event listener to the form's submit event
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get form input values
//       const email = document.querySelector('input[name="email"]').value;
// const subject = document.querySelector('input[name="subject"]').value;
// const message = document.querySelector('textarea[name="message"]').value;

      const email = document.querySelector('#emaill').value;
      const subject = document.querySelector('#sub').value;
      const message = document.querySelector('#mssg').value;
    console.log(email);
    console.log(subject)
      // Create an object with the form data
      const formData = {
        email: email,
        subject: subject,
        message: message
      };
  console.log(formData);
      // Send the form data to the server
      fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(function(response) {
          if (response.ok) {
            // Email sent successfully
            console.log('Email sent successfully');
          } else {
            // Error sending email
            console.error('Error sending email');
          }
        })
        .catch(function(error) {
          console.error('Error sending email:', error);
        });
    });
  });
  