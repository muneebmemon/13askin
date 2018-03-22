module.exports = function(sequelize, DataTypes) {
var Icecream = sequelize.define('Icecream', {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true
   },
   icecream_name: {
     type: DataTypes.STRING,
     allowNull: true
   },
   email: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
       isEmail: true
     }
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
   }
 });

 return Icecream;
}