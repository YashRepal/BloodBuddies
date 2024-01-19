const express = require('express');
const router = express.Router();
const Donor = require('../../models/donor');


router.get('/donors', async (req,res) => {
    try {
        const donors = await Donor.find();
        res.status(200).json(donors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;