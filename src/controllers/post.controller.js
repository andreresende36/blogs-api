const postService = require('../services/post.service');

const getAll = async (req, res) => {
  const posts = await postService.getAll();

  return res.status(200).json(posts);
};

const findById = async (req, res) => {
  const postId = Number(req.params.id);

  const { type, message, data } = await postService.findById(postId);

  if (type) return res.status(type).json({ message });
  
  return res.status(200).json(data);
};

const create = async (req, res) => {
  const post = req.body;
  const userId = req.payload.data.id;

  const { type, message, data } = await postService.create({ ...post, userId });

  if (type) return res.status(type).json({ message });

  return res.status(201).json(data);
};

const update = async (req, res) => {
  const postId = Number(req.params.id);
  const { type, message, data } = await postService.update(postId, req.body);

  if (type) return res.status(type).json({ message });
  
  return res.status(200).json(data);
};

module.exports = { 
  create,
  getAll,
  findById,
  update,
};