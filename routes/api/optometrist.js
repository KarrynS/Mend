const router = require("express").Router();
const optometristController = require("../../controllers/optometristController");
const passport = require("passport");
const { Optometrist } = require("../../models");


var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
  function(username, password, done) {
    Optometrist.getUserByUsername(username, function(err, user){
      if(err) throw err;
      if(!user){
        return done(null, false, {message: 'Unknown User'});
      }
      Optometrist.comparePassword(password, user.password, function(err, isMatch){
        if(err) throw err;
     	if(isMatch){
     	  return done(null, user);
     	} else {
     	  return done(null, false, {message: 'Invalid password'});
     	}
     });
   });
  }
));


passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
passport.deserializeUser(function(id, done) {
Optometrist.getUserById(id, function(err, user) {
    done(err, user);
});
});

// router.route("/")
//   .post(optomteristController.find);
router.route("/patient")
  .get(optometristController.loadPatient);


//Authentication routes
router.route("/signup")
    .post(optometristController.create)
    .get(optometristController.find);  

// Endpoint to login
router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    res.send(req.user);
  }
);

// Endpoint to get current user
router.get('/user', function(req, res){
  res.send(req.user);
})


// Endpoint to logout
router.get('/logout', function(req, res){
  req.logout();
  res.send(null)
});

module.exports = router;