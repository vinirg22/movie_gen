module.exports = (sequelize, DataTypes) => {
  const MovieScores = sequelize.define("MovieScores", {
    action: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    adventure: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    animation: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    comedy: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    crime: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    documentary: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    drama: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    family: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    fantasy: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    history: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    horror: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    music: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    mystery: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    romance: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    sciencefiction: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    tvmovie: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    thriller: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    war: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    western: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    UserId: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });

  MovieScores.associate = function(models) {
    models.MovieScores.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return MovieScores;
};
