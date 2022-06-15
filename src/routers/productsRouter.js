const express = require('express');
const router = express.Router();
const path = require('path');
const productsController = require(path.join(__dirname , '../controllers/productsController.js'))

router.get('/list', productsController.listView)

module.exports = router;