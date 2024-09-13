const Task_NodeJs_To_Do_List = require('../models/task');

const deleteTask = async (req, res) => {
    try {
        const task = await Task_NodeJs_To_Do_List.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the task' });
    }
};

module.exports = deleteTask;