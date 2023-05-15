const postService = require('../services/post.service');

const getAll = async (_req, res) => {
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

const exclude = async (req, res) => {
  const postId = Number(req.params.id);
  const { type, message, data } = await postService.exclude(postId);

  if (type) return res.status(type).json({ message });
  if (data === 0) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(204).json();
};

module.exports = { 
  create,
  getAll,
  findById,
  update,
  exclude,
};