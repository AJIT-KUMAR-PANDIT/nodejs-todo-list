const Task_NodeJs_To_Do_List = require('../models/task');

const createTask = async (req, res) => {
    try {
        const { title, description, dueDate, category } = req.body;
        if (!title || title.trim() === '') {
            return res.status(400).json({ error: 'Title is required' });
        }
        const task = new Task_NodeJs_To_Do_List({ title, description, dueDate, category });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the task' });
    }
};

module.exports = createTask;