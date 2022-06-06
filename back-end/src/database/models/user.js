const user = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: { 
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING },
  }, {
    timestamps: false,
    tableName: 'users',
  });

  return user;
};

module.exports = user;