/**
 * 
 * @param {import('sequelize').Sequelize} Sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

const Category = (Sequelize, DataTypes) => {
  const CategoryTable = Sequelize.define('Category', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,        
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'categories'
  });

  return CategoryTable;
}

module.exports = Category;