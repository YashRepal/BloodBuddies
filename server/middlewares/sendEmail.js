const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'contactus.bloodbuddy@gmail.com',
    pass: 'suek yqzr jjhq djtq',
  },
});

const sendEmail = (req, res, next) => {
  const { name, email, phone, message } = req.body;
  const recipients = ['arpitsinghofc@gmail.com', 'parthshitole565@gmail.com','armannadaf05@gmail.com'];


  const mailOptions = {
    from: 'contactus.bloodbuddy@gmail.com',
    to: recipients.join(', '),
    subject: 'You have got a message from BloodBuddy',
    html: `
      <h1 style="color: #8B0000;">Message from BloodBuddy</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };  

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // console.log('Email sent: ' + info.response);
      next();
    }
  });
};

module.exports = sendEmail;