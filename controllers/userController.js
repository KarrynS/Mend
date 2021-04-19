const db = require("../models");

//Defining methods for profileController
module.exports = {
    create: function(req,res) {
        var password = req.body.password;
        var password2 = req.body.password2;
      
        if (password == password2){
          var newUser = new User({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
          });
      
          User.createUser(newUser, function(err, user){
            if(err) throw err;
            res.send(user).end()
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
    }

}

