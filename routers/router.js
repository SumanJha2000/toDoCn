
const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/ctrl.js');

router.get('/', ctrl.getData);
router.post('/', ctrl.postData);
router.get('/:id', ctrl.deleteData);


module.exports = router;