const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("passport");
const { User } = require("../../models");

var LocalStrategy = require('passport-local').Strategy;
passport.use("user", new LocalStrategy(
  function(username, password, done) {
    console.log("passport", username, password)
    User.getUserByUsername(username, function(err, user){
      if(err) throw err;
      if(!user){
        return done(null, false, {message: 'Unknown User'});
      }
      User.comparePassword(password, user.password, function(err, isMatch){
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
    User.getUserById(id, function(err, user) {
      done(err, user);
    });
  });

router.route("/signup")
    .post(userController.create)
    .get(userController.find);    


// Endpoint to login
router.post('/login',
  passport.authenticate('user'),
  function(req, res) {
    console.log("login error: ", req)
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

//loading management page
router.route('/management')
  .get(userController.loadManagement);


module.exports = router;