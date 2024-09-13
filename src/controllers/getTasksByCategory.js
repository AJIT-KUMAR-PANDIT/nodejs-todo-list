const Task_NodeJs_To_Do_List = require('../models/task');

const getTasksByCategory = async (req, res) => {
    try {
        const category = req.params.category;

        // Use case-insensitive regex for the category search
        const tasks = await Task_NodeJs_To_Do_List.find({
            category: { $regex: new RegExp(`^${category}$`, 'i') }
        });

        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching tasks by category' });
    }
};

module.exports = getTasksByCategory;
