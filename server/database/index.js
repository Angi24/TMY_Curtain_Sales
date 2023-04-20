const mysql = require('mysql');

const database = mysql.createPool({
    host: 'localhost',
    port: 3308,
    user: 'root',
    // password: 'admin123',
    database: 'login'
});

module.exports = (sql, arr, callback) => {
    database.query(sql, arr, function (error, result) {
        if (error) {
            return console.log(error);
        }
        callback(result);
    });
};