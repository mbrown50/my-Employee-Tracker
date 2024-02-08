const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type:DataTypes.DECIMAL(10,2),
      allowNull: false,
      is_decimal: true
    },
    stock: {
      type:DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 10,
      isnumeric: true
    },
    category_id: {
      type:DataTypes.INTEGER,
      references: {
        model: 'Category',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Product',
  }
);

module.exports = Product;
