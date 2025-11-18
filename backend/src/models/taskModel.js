const pool = require('../db');

const Task = {
  async create({ title, description }) {
    const [result] = await pool.query(
      'INSERT INTO task (title, description) VALUES (?, ?)',
      [title, description]
    );
    return result.insertId;
  },

  async findById(id) {
    const [rows] = await pool.query('SELECT * FROM task WHERE id = ?', [id]);
    return rows[0] || null;
  },

  async getRecentUncompleted(limit = 5) {
    const [rows] = await pool.query(
      'SELECT id, title, description, created_at FROM task WHERE completed = 0 ORDER BY created_at DESC LIMIT ?',
      [Number(limit)]
    );
    return rows;
  },

  async markCompleted(id) {
    const [result] = await pool.query(
      'UPDATE task SET completed = 1, completed_at = NOW() WHERE id = ? AND completed = 0',
      [id]
    );
    return result.affectedRows > 0;
  }
};

module.exports = Task;
