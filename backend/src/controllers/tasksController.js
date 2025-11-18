const Task = require('../models/taskModel');

exports.listRecent = async (req, res) => {
  try {
    const tasks = await Task.getRecentUncompleted(5);
    res.json({ data: tasks });
  } catch (err) {
    console.error('listRecent err', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !title.trim()) {
      return res.status(400).json({ error: 'Title is required' });
    }
    const id = await Task.create({ title: title.trim(), description: description || '' });
    const created = await Task.findById(id);
    res.status(201).json({ data: created });
  } catch (err) {
    console.error('createTask err', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.completeTask = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const ok = await Task.markCompleted(id);
    if (!ok) return res.status(404).json({ error: 'Task not found' });
    res.json({ success: true });
  } catch (err) {
    console.error('completeTask err', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
