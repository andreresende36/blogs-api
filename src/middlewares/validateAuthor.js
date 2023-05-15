const postService = require('../services/post.service');

const validateAuthor = async (req, res, next) => {
  const userId = req.payload.data.id;
  const postId = Number(req.params.id);
  const result = await postService.findById(postId);

  if (result.type === 404) return res.status(404).json({ message: 'Post does not exist' });

  if (userId !== result.data.dataValues.userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  return next();
};

module.exports = validateAuthor;