const users = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
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

  return users;
};

module.exports = users;