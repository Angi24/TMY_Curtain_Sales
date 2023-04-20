const bcrypt = require('bcryptjs');
const db = require('../database');


module.exports = (req, res) => {
    // Check if username has existed
    const sql = 'SELECT * FROM users WHERE username=?';
    db(sql, req.body.username, result => {
        if (result.length >= 1) {
            return res.send({
                status: 400,
                msg: 'Username has existed'
            });
        }

        const sql = 'INSERT INTO users set ?';
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const { username, email, password } = req.body;
        db(sql, { username, email, password }, result => {
            if (result.affectedRows === 1) {
                return res.send({
                    status: 200,
                    msg: 'Register successful',
                    userData: {
                        username,
                        email,
                        password
                    }
                });
            }
            res.send({
                status: 400,
                msg: 'Register unsuccessful'
            });
        });
    });
};