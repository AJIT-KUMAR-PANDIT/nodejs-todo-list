const Task_NodeJs_To_Do_List = require('../models/task');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task_NodeJs_To_Do_List.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching tasks' });
    }
};

module.exports = getAllTasks;