const { BlogPost, PostCategory, sequelize } = require('../models');

const create = async ({ title, content, categoryIds, userId }) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const date = new Date();
      const { dataValues } = await BlogPost.create({ 
        title, content, userId, published: date, updated: date }, { transaction: t });
      const postId = dataValues.id;
      
      // Inserção do par postId-categoryId
      await Promise.all(categoryIds.map(async (categoryId) => {
        await PostCategory.create({ postId, categoryId }, { transaction: t });
      }));
      return dataValues;
    });
    return { type: null, message: 'OK', data: result };
  } catch (error) { return { type: 500, message: 'Erro interno do servidor', data: null }; }
};

module.exports = { 
  create, 
};