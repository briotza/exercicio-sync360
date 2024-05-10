const express = require('express');
const UserController = require('../controllers/user');
const router = express.Router();

// Rota para pegar todos os usuários
router.get('/', UserController.getAllUsers);

// Rota para pegar usuário por id
router.get('/:id', UserController.getUserById);

// Rota para atualizar usuário por id
router.patch('/:id', UserController.updateUserById);

module.exports = router; 
