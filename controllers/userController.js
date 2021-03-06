const db = require("../models");

//Defining methods for userController
module.exports = {
    create: function(req,res) {
        var password = req.body.password;
        var password2 = req.body.password2;
      
        if (password == password2){
          var newUser = new db.User({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            birthday: req.body.birthday
          }
          );
          console.log("dbUser/userController", newUser)
          db.User.createUser(newUser, function(err, user){
            if(err) throw err;
            res.redirect(307, '/api/user/login')
          });
        } else{
          res.status(500).send("{errors: \"Passwords don't match\"}").end()
        }
    },
    find: function(req,res) {
        db.User.find(req.body)
        .then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => {
            res.status(422).json(err);
        });
    },
    // populate: function(req, res) {
    //     db.User.find({})
    //     .populate("symptoms")
    //     .then(dbUser => {
    //       res.json(dbUser);
    //     })
    //     .catch(err => {
    //       res.json(err);
    //     });
    // },
    login: function(req,res) {
      res.send(req.user);
    }, 
    loadManagement: function(req,res) {
      db.User.findById({_id: req.user.id})
      .then(management => {
        console.log("mx =", management)
        res.status(200).json(management);
      })
    }
}

