const { User, Category, BlogPost, PostCategory, sequelize } = require('../models');

const getAll = async () => {
  const posts = await BlogPost.findAll({ 
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category,
        as: 'categories',
        through: { attributes: [] } },
    ], 
  });

  return posts;
};

const findById = async (postId) => {
  const post = await BlogPost.findByPk(
    postId, 
    { include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category,
        as: 'categories',
        through: { attributes: [] } },
      ],
    },
);
  if (!post) return { type: 404, message: 'Post does not exist', data: null };

  return { type: null, message: 'OK', data: post };
};

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
  getAll,
  findById,
};