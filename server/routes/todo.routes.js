const express = require('express');
const { createTask, findOneTask, updateTask, deleteTask, toggleComplete } = require('../controllers/todo.controller');
const verifyToken = require('../middlewares/auth');

const router = express.Router();

router.post('/create', verifyToken, createTask);
router.post('/toggleComplete/:id', verifyToken, toggleComplete)
router.get('/:id', verifyToken, findOneTask);
router.put('/:id', verifyToken, updateTask);
router.delete('/:id', verifyToken, deleteTask);

module.exports = router;
