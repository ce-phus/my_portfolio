// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, contact, message } = JSON.parse(req.body);

    // Create a nodemailer transporter for sending emails through Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL, // Replace with your Gmail email
        pass: process.env.GMAIL_PASSWORD, // Replace with your Gmail password or an app-specific password
      },
    });

    // Email data
    const mailData = {
      from: 'pnakitaren2@gmail.com',
      to: 'cephusluke@gmail.com', // Replace with your recipient's email
      subject: `Message from ${name}`,
      Contact: contact,
      text: message,
    };

    try {
      // Send the email
      await transporter.sendMail(mailData);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).end();
  }
};
