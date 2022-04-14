const nodemailer = require('nodemailer');

const sendEmail = async options => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  //define the email
  const mailOptions = {
    from: 'Dhruv Kaith <hello@dhruv.io>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    //html
  };
  // actually send the mail
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
