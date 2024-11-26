const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const sendEmail = async (options) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const imagePath = path.resolve(__dirname, '../assets/img/undercode-logo.jpg');

    if (!fs.existsSync(imagePath)) {
      throw new Error(`No se encontró la imagen en la ruta: ${imagePath}`);
    }

    const imageContent = fs.readFileSync(imagePath).toString('base64');

    const mailOptions = {
      from: `UnderCode <${process.env.EMAIL_USERNAME}>`,
      to: options.email,
      subject: options.subject,
      html: options.html, 
      attachments: [
        {
          filename: 'undercode-logo.jpg',
          content: imageContent,
          encoding: 'base64',
          cid: 'logo', 
        },
      ],
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error al enviar el correo:', error.message);
    throw new Error('Error al enviar el correo');
  }
};

module.exports = sendEmail;
