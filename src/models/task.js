const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    dueDate: Date,
    category: String
});

module.exports = mongoose.model('Task_NodeJs_To_Do_List', taskSchema);