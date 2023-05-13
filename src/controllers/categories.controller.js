const categoriesService = require('../services/categories.service');

const getAll = async (_req, res) => {
  const categories = await categoriesService.getAll();

  return res.status(200).json(categories);
};

const create = async (req, res) => {
  const category = await categoriesService.create(req.body);
  const { type, message, data } = category;

  if (type) return res.status(type).json({ message });

  return res.status(201).json({ ...data });
};

module.exports = {
  create,
  getAll,
};