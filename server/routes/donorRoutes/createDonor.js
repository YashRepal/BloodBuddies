const express = require('express');
const router = express.Router();
const Donor =  require('../../models/donor');


router.post('/donors', async (req,res) => {
    try {
        const newDonor = new Donor(req.body);
        const savedDonor = await newDonor.save();
        res.status(201).json(savedDonor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;