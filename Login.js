const { User } = require("./User");
const express = require("express");
const app = express();

const UserAuth = () => {

    app.post('/api/login', (req, res) => {
        console.log(req.body);
        const inputData = req.body;
        const findData = User.findOne({username: inputData.username})
        bcrypt.compare(inputData.password, findData.password)
        .then(isCorrect => {
            if(!isCorrect) {
                res.json({
                    success: false,
                    isLoggedIn: false,
                    message: 'incorrect username or password'
                })
            } else {
                payload = {
                    id: findData._id,
                    firstname: inputData.firstname,
                    lastname: inputData.lastname,
                    username: inputData.username,
                    email: inputData.email
                };
                
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET, 
                    {expiresIn: 10000},
                    (err, token) => {
                        if(err) {
                            console.log(err);
                            res.json({
                                success: false,
                                isLoggedIn: false,
                                message: 'user token error'
                            })
                        }
                        res.json({
                            success: true,
                            isLoggedIn: true,
                            token: 'Bearer ' + token
                        })
                    }
                )
    
            }
        })
    })

};

    const verifyJwtToken = (req, res, next) => {
        const token = req.headers['x-access-token']?.split(' ')[1];
    
        if(!token) {
            res.json({
                success: false,
                isLoggedIn: false,
                message: 'user authentication failed'
            })
        } else {
            jwt.verify(token, process.env.JWT_SECRET, (err, result) => {
                if(err) {
                    res.json({
                        success: false,
                        isLoggedIn: false,
                        message: "use authentication failed"
                    })
                };
                req.user = {};
                req.user.firstname = result.userData.firstname;
                req.user.lastname = result.userData.lastname;
                req.user.email = result.userData.email;
                next();
            })
        }
    }



const isUserAuth = () => {

    app.get('/api/auth_check', verifyJwtToken, (req, res) => {
        console.log(req.user);
        res.json({
            success: true,
            isLoggedIn: true,
            userData: req.user
        })
    })
    
};

module.exports = {
    UserAuth,
    isUserAuth
}