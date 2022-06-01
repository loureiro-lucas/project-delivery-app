const salesProducts = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts',{
    sale_id: {
      type: DataTypes.INTEGER, 
      foreignKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    quantity: DataTypes.INTEGER,
  });

  salesProducts.associate = (models) => {
    models.sales.belongsToMany(models.products, {
      as: 'products',
      through: salesProducts,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
    models.products.belongsToMany(models.sales, {
      as: 'sales',
      through: salesProducts,
      foreignKey: 'product_id',
      otherKey: 'sale_id', 
    })
  }

  

  return salesProducts;
};