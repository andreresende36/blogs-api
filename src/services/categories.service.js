const { Category } = require('../models');

const getAll = async () => {
  const categories = await Category.findAll();

  return categories;
};

const create = async ({ name }) => {
  const categories = await Category.findAll();

  const categoryNotUnique = categories.some((category) => category.name === name);

  if (categoryNotUnique) return { type: 409, message: 'Category already registered', data: null };
  
  const { dataValues } = await Category.create({ name });

  return { type: null, message: 'OK', data: dataValues };
};

module.exports = {
  create,
  getAll,
};