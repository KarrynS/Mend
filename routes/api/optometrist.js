const router = require("express").Router();
const userController = require("../../controllers/userController");
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

router.route("/signup")
    .post(userController.create)
    .get(userController.find);    

router.post('/login',
    passport.authenticate('local'),
    function(req, res) {
      res.send(req.user);
    }
  );
// Endpoint to get current user
router.get('/current', function(req, res){
    res.send(req.user);
  })
  
  
  // Endpoint to logout
  router.get('/logout', function(req, res){
    req.logout();
    res.send(null)
  });
