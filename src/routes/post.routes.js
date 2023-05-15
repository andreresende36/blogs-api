const express = require('express');
const validateToken = require('../middlewares/validateToken');
const validateBlankValues = require('../middlewares/validateBlankValues');
const validateCategories = require('../middlewares/validateCategories');
const validateAuthor = require('../middlewares/validateAuthor');
const postController = require('../controllers/post.controller');

const router = express.Router();

router.get('/search', validateToken, postController.search);
router.get('/:id', validateToken, postController.findById);
router.get('/', validateToken, postController.getAll);
router.post(
  '/',
  validateToken,
  validateBlankValues,
  validateCategories,
  postController.create,
);
router.put(
  '/:id',
  validateToken,
  validateAuthor,
  validateBlankValues,
  postController.update,
  );
router.delete(
  '/:id',
  validateToken,
  validateAuthor,
  postController.exclude,
);

module.exports = router;