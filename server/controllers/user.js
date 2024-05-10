const { db } = require('../db.js'); 

exports.getAllUsers = (req, res) => {
    const sql = 'SELECT * FROM usuarios';
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    });
};

module.exports = { getUsers }; 