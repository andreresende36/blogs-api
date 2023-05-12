/**
 * 
 * @param {import('sequelize').Sequelize} Sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const User = (Sequelize, DataTypes) => {
  const UserTable = Sequelize.define('User', {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, 
  { tableName: 'users',
    underscored: true,
    timestamps: false 
  },
);
  return UserTable;
};

module.exports = User;