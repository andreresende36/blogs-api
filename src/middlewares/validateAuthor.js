const postService = require('../services/post.service');

const validateAuthor = async (req, res, next) => {
  const userId = req.payload.data.id;
  const postId = Number(req.params.id);
  const { data: { dataValues } } = await postService.findById(postId);

  if (userId !== dataValues.userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  return next();
};

module.exports = validateAuthor;