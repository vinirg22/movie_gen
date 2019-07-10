var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define("Movie", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    movieName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    moviePoster: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    movieGenre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    movieTime: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    moviePlot: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    movieDirector: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    movieActors: {
      type: DataTypes.STRING,
      allowNull: false
    },
    movieYear: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    movieTrailer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    movieRatingImdb: {
      type: DataTypes.STRING,
      allowNull: false
    },
    movieRatingRotten: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    watched: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    }
  });

  // Return the model we defined.
  return Movie;
};
