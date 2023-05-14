/**
 * 
 * @param {import('sequelize').Sequelize} Sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

const BlogPost = (Sequelize, DataTypes) => {
  const BlogPostTable = Sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,        
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    published: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'blog_posts'
  });

  BlogPostTable.associate = (models) => {
    BlogPostTable.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId'
    });
  }

  return BlogPostTable;
};

module.exports = BlogPost;