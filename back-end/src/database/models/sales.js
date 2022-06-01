const users = require('./users');

const sales = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    id: { 
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER },
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL(9,2),
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  sales.belongTo(
    users, { foreignKey: 'user_id', as: 'customer' }
  );

  sales.belongTo(
    users, { foreignKey: 'seller_id', as: 'seller' }
  );

  return sales;
};

module.exports = sales;