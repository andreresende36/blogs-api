const postService = require('../services/post.service');

const create = async (req, res) => {
  const post = req.body;
  const userId = req.payload.data.id;
  console.log(userId);

  const { type, message, data } = await postService.create({ ...post, userId });

  if (type) return res.status(type).json({ message });

  return res.status(201).json(data);
};

module.exports = { 
  create, 
};