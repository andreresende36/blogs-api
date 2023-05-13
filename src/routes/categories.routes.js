const express = require('express');
const validateToken = require('../middlewares/validateToken');
const categoriesController = require('../controllers/categories.controller');
const validateName = require('../middlewares/validateName');

const router = express.Router();

router.post('/', validateToken, validateName, categoriesController.create);

module.exports = router;