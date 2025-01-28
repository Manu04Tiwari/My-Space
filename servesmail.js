const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

// Parse JSON bodies

const nodemailer = require('nodemailer');
const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

const path = require('path');

// Configuring Nodemailer with  email service provider details
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PASSWORD
    }
  });
  
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+"../public/contact.html"));
  });
  
// Endpoint for handling the form submission
app.post('/send-email', (req, res) => {
    
  const { email, subject, message } = req.body;
  console.log(email);
  console.log(req.body)
  // Create the email content
  const mailOptions = {
    from: 'Marttiwari8219@gmail.com',
    to: 'Marttiwari8219@gmail.com', // Replacing own email address
    subject: subject,
    text: `Email: ${req.body.email}\n\n${req.body.message}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Error sending email' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Email sent successfully' });
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});


