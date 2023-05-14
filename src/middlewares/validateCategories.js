const categoriesService = require('../services/categories.service');

const validateCategories = async (req, res, next) => {
  const { categoryIds } = req.body;  
  const categories = await categoriesService.getAll();
  const ids = categories.map((category) => category.id);
  
  const categoriesValidation = categoryIds.every((category) => ids.includes(category));
  if (!categoriesValidation || !Array.isArray(categoryIds)) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  return next();
};

module.exports = validateCategories;