const products = (sequelize, DataTypes) => {
  const products = sequelize.define( 'products',{
    id: { 
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4,2),
    url_image: DataTypes.STRING
  });
  return products;
};

module.exports = products;