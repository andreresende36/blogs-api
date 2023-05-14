const postService = require('../services/post.service');

const getAll = async (req, res) => {
  const posts = await postService.getAll();

  return res.status(200).json(posts);
};

const create = async (req, res) => {
  const post = req.body;
  const userId = req.payload.data.id;

  const { type, message, data } = await postService.create({ ...post, userId });

  if (type) return res.status(type).json({ message });

  return res.status(201).json(data);
};

module.exports = { 
  create,
  getAll,
};