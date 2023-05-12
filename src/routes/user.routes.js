const express = require('express');
const validateDisplayName = require('../middlewares/validateDisplayName');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');
const userController = require('../controllers/user.controller');

const router = express.Router();

const userPostValidations = [validateDisplayName, validateEmail, validatePassword];
router.post('/', userPostValidations, userController.create);

module.exports = router;