

module.exports = function(sequelize, DataTypes){
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      defaultValue: false,
      type: DataTypes.BOOLEAN
    }
  }, {
    classMethods: {
      associate: function(models){
        Burger.hasOne(models.customer);
      }
    }
  });
  return Burger;
};
