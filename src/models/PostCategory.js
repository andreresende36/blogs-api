/**
 * 
 * @param {import('sequelize').Sequelize} Sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

const PostCategory = (Sequelize, DataTypes) => {
  const PostCategoryTable = Sequelize.define('PostCategory', {
      postId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    }, 
    {
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories'
    }
  );

  PostCategoryTable.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: PostCategoryTable,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

    Category.belongsToMany(BlogPost, {
      as: 'blog_posts',
      through: PostCategoryTable,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  }

  return PostCategoryTable;
};

module.exports = PostCategory;