const express = require('express');
const cors = require('cors');
const tasksRouter = require('./routes/tasks');

const app = express();
app.use(cors());
app.use(express.json());

//task api
app.use('/api/tasks', tasksRouter);

app.get('/health', (req, res) => res.json({status: 'ok'}));

module.exports = app;
