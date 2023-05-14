/**
 * 
 * @param {import('sequelize').Sequelize} Sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const User = (Sequelize, DataTypes) => {
  const UserTable = Sequelize.define('User', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    displayName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    image: DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });

  UserTable.associate = (models) => {
    UserTable.hasMany(models.BlogPost, {
      as: 'blog_posts',
      foreignKey: 'user_id',
    })
  };
  
  return UserTable;
};

module.exports = User;