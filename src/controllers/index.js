const createTask = require('./createTask');
const getAllTasks = require('./getAllTasks');
const completeTask = require('./completeTask');
const updateTask = require('./updateTask');
const deleteTask = require('./deleteTask');
const getTasksByCategory = require('./getTasksByCategory');

module.exports = {
    createTask,
    getAllTasks,
    completeTask,
    updateTask,
    deleteTask,
    getTasksByCategory
};