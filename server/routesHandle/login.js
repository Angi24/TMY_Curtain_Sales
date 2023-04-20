const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../database');
const config = require('../config');

module.exports = (req, res) => {
    // 1. Check if user exists
    const sql = 'SELECT * from users WHERE username=?';
    db(sql, req.body.username, result => {
        if (result.length !== 1) {
            return res.send({
                status: 400,
                msg: 'The user does not exist'
            });
        }
        // 2. If user exists, compare password
        const psRes = bcrypt.compareSync(req.body.password, result[0].password);
        if (!psRes) {
            return res.send({
                status: 400,
                msg: 'Wrong password'
            });
        }
        // 3. Create token according to user's information
        const token = jwt.sign({ username: req.body.username }, config.jwtKey, {
            expiresIn: '1h'
        });
        res.send({
            status: 200,
            msg: 'Login successful',
            token
        });
    });
};