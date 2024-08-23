const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const router = express.Router();

router.post('/sendEmail', async (req, res) => {
  const { name, email, msg } = req.body;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Set up email options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // your email where you want to receive messages
    subject: `Contact Form Message from ${name}`,
    text: msg,
  };

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

module.exports = router;
