const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config');

router.post('/user', (req, res) => {
    console.log(req.headers)
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        const tokenStr = req.headers.authorization.split(' ')[1]
        jwt.verify(tokenStr, config.jwtKey, (error, decoded) => {
            // console.log('Verify:', decoded)
            res.send({
                status: 200,
                msg: 'Request successful',
                username: decoded.username
            });
        })
    }
});

module.exports = router;