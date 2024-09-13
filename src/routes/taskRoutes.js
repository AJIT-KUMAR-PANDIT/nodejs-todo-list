const express = require('express');
const router = express.Router();
const {
    createTask,
    getAllTasks,
    completeTask,
    updateTask,
    deleteTask,
    getTasksByCategory
} = require('../controllers');

router.post('/', createTask);
router.get('/', getAllTasks);
router.patch('/:id/complete', completeTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.get('/category/:category', getTasksByCategory);

module.exports = router;