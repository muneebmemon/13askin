module.exports = function(sequelize, DataTypes) {
var Icecream = sequelize.define('Icecream', {
   icecream_name: {
     type: DataTypes.STRING,
     allowNull: true
   },
   email: {
     type: DataTypes.STRING,
     allowNull: true
   },
   description: {
     type: DataTypes.STRING,
     allowNull: false
   },
   scoop_color: {
     type: DataTypes.STRING,
     allowNull: false
   },
   cone_color: {
       type: DataTypes.STRING,
       allowNull: false
   },
   canvas: {
        type: DataTypes.TEXT,
        allowNull: false
   }
 });

 Icecream.associate = function(models) {
  // We're saying that a Post should belong to an Author
  // A Post can't be created without an Author due to the foreign key constraint
  Icecream.belongsTo(models.User, {
    foreignKey: {
      allowNull: false
    }
  });
};

 return Icecream;
}