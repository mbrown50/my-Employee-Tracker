// import models
const Product = require('./Role');
const Category = require('./Employee');
const Tag = require('./Department');
const ProductTag = require('./ProductTag');

// One-to-Many

// Products belongsTo Category
// A prodcut belongs to a single category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
// A category can have many products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Many-to-Many

// Products belongToMany Tags (through ProductTag)
// "Product" belongs to many "Tag", and is recorded in the "ProductTag" table, using "Product"'s ID.
Product.belongsToMany(
  Tag, 
  {
      through: 'ProductTag',
      // note that this is the Parent's Id, not Child. 
      foreignKey: 'product_id'
  }
)

// Tags belongToMany Products (through ProductTag)
// "Tag" belongs to many "Product", and is recorded in the "ProductTage" table, using "Tag"'s ID.
Tag.belongsToMany(
  Product,
  {
      through: 'ProductTag',
      // note that this is the Child's Id, not Parent.
      foreignKey: 'tag_id'
  }
)


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
