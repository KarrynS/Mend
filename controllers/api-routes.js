// Requiring our models and passport as we've configured it
//var db = require("../models/Profile");
var passport = require("../config/passport");
const Profile = require("../models/profile");
const Symptom = require("../models/symptom");
const isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
    app.post("/api/signup", (req, res) => {
        Profile.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          dob: req.body.dob
        })
            // .then(dbUser => {
            //     res.json(dbUser);
            // })
            .then(() => {
              res.redirect(301, "/dashboard");
            })
            .catch(err => {
                res.status(401).json(err);
            });
    });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });


  ///need to add other roots 
  //symptoms, diagnosis, treatment plan 
  
//Route for creating a new symptom
  app.post("/dashboard", isAuthenticated, (req, res) => {
    Symptom.create({
        eye: req.body.eye,
        soreEye: req.body.soreEye,
        redEye: req.body.redEye,
        dryEye: req.body.dryEye,
        itchyEye: req.body.itchyEye,
        blurryVision: req.body.blurryVision, 
        lossofVision: req.body.lossofVision, 
        doubleVision: req.body.doubleVision,
        headaches: req.body.headaches, 
        floaters: req.body.floaters,
        flashes: req.body.flashes,
        pain: req.body.pain
    })
      .then(dbUser => {
        res.json(dbUser);
      })
    .then(() => {
      res.redirect(301, "/symptoms");
    })
    .catch(err => {
        res.status(401).json(err);
    });
  });

  //Route for displaying all symptoms
  app.get("/symptoms", (req,res) => {
    Symptom.find({})
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      })
  })

  //Route for pratitioners 
  //authentication
  app.post("/api/practitioner", passport.authenticate("local"), function(req, res) {
    const loginUser = {
      name: req.user.name,
      password: req.user.password
    };
    res.json(loginUser);
  });

  

};