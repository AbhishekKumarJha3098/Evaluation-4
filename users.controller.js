const express = require('express');
const User = require('../models/user.model');
const upload = require('../middlewares/app');



const router = express.Router();


router.post('/', upload.single("profile_url"), async (req, res) => {
    try {
        const users = await User.create({


            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            profile_url: req.file.path,
        })
        return res.status(201).send({ users })

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
})



module.exports = router;

