const db = require("../models");
const isAuthenticated = require("../config/middleware/isAuthenticated");
module.exports = app => {
  // Load home page
  app.get("/movie", (req, res) => res.render("movie"));

  // Load signup page
  app.get("/", (req, res) => res.render("signup"));

  // Load login page
  app.get("/login", (req, res) => res.render("login"));

  // Load movie page
  app.get("/movie", isAuthenticated, (req, res) => {
    db.User.findOne({
      where: {
        id: req.user.id
      },
      include: [db.MovieScores]
    }).then(dbUser => {
      res.render("movie", { user: dbUser });
    });
  });

  // Load survey page
  app.get("/survey", isAuthenticated, (req, res) => {
    db.User.findOne({
      where: {
        id: req.user.id
      }
      // include: [db.MovieScores]
    }).then(dbUser => {
      res.render("survey", { user: dbUser });
    });
  });

  // Load example page and pass in an example by id
  app.get("/survey/:id", isAuthenticated, (req, res) => {
    db.Example.findOne({ where: { id: req.params.id } }).then(dbSurvey => {
      res.render("survey", {
        survey: dbSurvey,
        user: req.user
      });
    });
  });
  // // Load movies page
  // app.get("/movie", (req, res) => res.render("movie"));

  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => res.render("404"));
};
