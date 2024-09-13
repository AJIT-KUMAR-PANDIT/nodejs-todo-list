const Task_NodeJs_To_Do_List = require('../models/task');

const completeTask = async (req, res) => {
    try {
        const task = await Task_NodeJs_To_Do_List.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        if (task.completed) {
            return res.status(400).json({ error: 'Task is already completed' });
        }
        task.completed = true;
        await task.save();
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the task' });
    }
};

module.exports = completeTask;