const express = require('express');
const router = express.Router();
const sendEmail = require('../middlewares/sendEmail');

router.post('/contact', sendEmail, (req, res) => {
  res.status(200).json({ message: 'Email sent successfully' });
});

module.exports = router;