const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const cors = require('cors');
const { Schema } = mongoose;
require('dotenv').config();
const UserMod = require('./User');
const LoginFxn = require('./Login')


mongoose.connect(process.env.DB_URI);

app.use(express.json())
app.use(express.urlencoded({ extended: false}));
app.use(cors());

LoginFxn.UserAuth();
LoginFxn.isUserAuth();
UserMod.UserFxn();

app.post('/api/register', async (req, res) => {
    console.log(req.body);
    const userData = req.body
    try {
        // const userObj = {
        //     firstname
        // }
        userData.password = bcrypt.hash(req.body.password, 10);
        let newUser = new User(userData);
        await newUser.save();
        console.log(`new user ${newUser.firstname} saved to database`);
        res.json({
            success: true,
            message: `new user ${newUser.firstname} saved to database`
        })
    } catch(err) {
        console.log(err)
    }
})





app.listen(process.env.PORT, () => {
    console.log('server runing on port ' + process.env.PORT)
})