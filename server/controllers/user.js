const { db } = require('../db');

// Pegar todos os usuários
exports.getAllUsers = (req, res) => {
    const sql = 'SELECT * FROM usuarios';
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    });
};

// Pegar usuário por id
exports.getUserById = (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM usuarios WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            throw err;
        }
        if (result.length > 0) {
            res.send(result[0]);
        } else {
            res.status(404).send('Usuário não encontrado');
        }
    });
};

// Atualizar usuário por id
exports.updateUserById = (req, res) => {
    const id = req.params.id;
    const updateUserData = req.body;
    const sql = 'UPDATE usuarios SET ? WHERE id = ?';
    db.query(sql, [updateUserData, id], (err, result) => {
        if (err) {
            res.status(500).send('Erro ao atualizar usuário');
            return;
        }
        res.send('Dados do usuário atualizados com sucesso')
    });
};

