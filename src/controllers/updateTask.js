const Task_NodeJs_To_Do_List = require('../models/task');

const updateTask = async (req, res) => {
    try {
        const { title, description, dueDate, category } = req.body;
        if (!title) {
            return res.status(400).json({ error: 'Title is required' });
        }
        const task = await Task_NodeJs_To_Do_List.findByIdAndUpdate(
            req.params.id,
            { title, description, dueDate, category },
            { new: true }
        );
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the task' });
    }
};

module.exports = updateTask;