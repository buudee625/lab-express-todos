const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todos');

// router.get('/', function(req, res, next) {
//     res.send('Todos Route!');
// });

router.get('/', todoController.index);
router.get('/new', todoController.new)
router.get('/:id', todoController.show);
router.post('/', todoController.create);
router.delete('/:id', todoController.delete);

module.exports = router;