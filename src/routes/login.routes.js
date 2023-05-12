const express = require('express');
const validateBlankValues = require('../validations/validateBlankValues');
const validateLoginFields = require('../validations/validateLoginFields');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/', validateBlankValues, validateLoginFields, userController.loginCheck);

module.exports = router;