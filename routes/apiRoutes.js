/* eslint-disable prettier/prettier */
const db = require("../models");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const unirest = require("unirest");
module.exports = app => {
  // Get all moviescores
  app.get("/api/moviescores", isAuthenticated, (req, res) => {
    db.MovieScores.findAll({
      where: {
        UserId: req.user.id
      }
    }).then(dbMovieScores => {
      res.json(dbMovieScores);
    });
  });
  // Create a new MovieScores
  app.post("/api/moviescores", isAuthenticated, (req, res) => {
    db.MovieScores.create({
      action: 0,
      adventure: 0,
      animation: 0,
      comedy: 0,
      crime: 0,
      documentary: 0,
      drama: 0,
      family: 0,
      fantasy: 0,
      history: 0,
      horror: 0,
      music: 0,
      mystery: 0,
      romance: 0,
      sciencefiction: 0,
      tvmovie: 0,
      thriller: 0,
      war: 0,
      western: 0,
      UserId: req.user.id
    }).then(dbMovieScores => {
      res.json(dbMovieScores);
    });
  });
  // Create a new MovieScores
  app.put("/api/moviescores", (req, res) => {
    console.log(req.user);
    console.log(req.body);
    db.MovieScores.increment(req.body.genres, {
      by: 1, where: { UserId: req.user.id}
    }
    ).then(dbMovieScores => {
      res.json(dbMovieScores);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", isAuthenticated, (req, res) => {
    db.Example.destroy({ where: { id: req.params.id } }).then(dbExample => {
      res.json(dbExample);
    });
  });

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    // res.json("/profile");
    res.json("/survey");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    console.log(req.body);
    db.User.create({
      username: req.body.username,
      password: req.body.password
    }).then ((newUser) => {
      db.MovieScores.create({
        action: 0,
        adventure: 0,
        animation: 0,
        comedy: 0,
        crime: 0,
        documentary: 0,
        drama: 0,
        family: 0,
        fantasy: 0,
        history: 0,
        horror: 0,
        music: 0,
        mystery: 0,
        romance: 0,
        sciencefiction: 0,
        tvmovie: 0,
        thriller: 0,
        war: 0,
        western: 0,
        UserId: newUser.id
      });
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(422).json(err.errors[0].message);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  const API_KEY = process.env.MOVIE_DB_KEY;
  // const searchQuery = "romance";

  app.get("/movies", (req, res) => {
    unirest.get("https://api.themoviedb.org/3/discover/movie?api_key=" + MOVIE_DB_KEY + "&query=" + searchText)
      .header("Content-Type", "application/json")
      .end(function (result) {
        res.json(result.body);
      });
  });

  app.get("/api/movie/:search", (req, res) => {
    unirest.get("https://api.themoviedb.org/3/search/movie?api_key=" + API_KEY + "&language=en-US&query=" + req.params.search + "&page=1&include_adult=false")
      .header("Content-Type", "application/json")
      .end(function (result) {
        res.json(result.body);
      });
  });

};


// "https://api.themoviedb.org/3/discover/movie?api_key=" + API_KEY + "&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12%2C%2016"