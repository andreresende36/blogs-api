const express = require('express');
const validateDisplayName = require('../middlewares/validateDisplayName');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');
const validateToken = require('../middlewares/validateToken');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.get('/:id', validateToken, userController.findById);
router.get('/', validateToken, userController.getAll);

const userPostValidations = [validateDisplayName, validateEmail, validatePassword];
router.post('/', userPostValidations, userController.create);

module.exports = router;