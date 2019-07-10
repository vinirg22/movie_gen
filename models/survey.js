module.exports = (sequelize, DataTypes) => {
  const Survey = sequelize.define("Survey", {
    genre: {
      type: DataTypes.STRING
    }
  });

  Survey.associate = function(models) {
    models.Survey.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Survey;
};
