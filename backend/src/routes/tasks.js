const express = require('express');
const router = express.Router();
const controller = require('../controllers/tasksController');

router.get('/', controller.listRecent);
router.post('/', controller.createTask);
router.put('/:id/complete', controller.completeTask);

module.exports = router;
