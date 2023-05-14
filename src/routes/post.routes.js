const express = require('express');
const validateToken = require('../middlewares/validateToken');
const validateBlankValues = require('../middlewares/validateBlankValues');
const validateCategories = require('../middlewares/validateCategories');
const postController = require('../controllers/post.controller');

const router = express.Router();

router.get('/', validateToken, postController.getAll);
router.post(
  '/',
  validateToken,
  validateBlankValues,
  validateCategories,
  postController.create,
);

module.exports = router;