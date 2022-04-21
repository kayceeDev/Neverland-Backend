const express = require('express');
const { bookControllers } = require('../../controllers');
const { protect } = require('../../services');

const router = express.Router();

router.post('/overview', bookControllers.overview);
router.post('/add', protect, bookControllers.add);
router.post('/remove', protect, bookControllers.remove);
router.post('/read', protect, bookControllers.read);

module.exports = router;
