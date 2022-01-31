// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category //done


Category.hasMany(Product, {
  foreignKey: 'category_id',
  
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Product.belongsToMany(Tag,
   {through: ProductTag} );
// Categories have many Products// done

// Products belongToMany Tags (through ProductTag)// done
Tag.belongsToMany(Product,
   {through: ProductTag} );

// Tags belongToMany Products (through ProductTag)// done

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
