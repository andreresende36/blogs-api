const express = require('express');
const validateBlankValues = require('../middlewares/validateBlankValues');
const validateLoginFields = require('../middlewares/validateLoginFields');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/', validateBlankValues, validateLoginFields, userController.loginCheck);

module.exports = router;