// Defining user model

module.exports = function(sequelize, DataTypes) {

  var User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER, 
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '/images/userplaceholder.jpg'
    }
  });

  return User;
};