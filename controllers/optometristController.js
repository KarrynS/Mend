const db = require("../models");

//Defining methods for optometrist Controller
module.exports = {
    create: function(req,res) {
        var password = req.body.password;
        var password2 = req.body.password2;
      
        if (password == password2){
          var newUser = new db.Optometrist({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            birthday: req.body.birthday
          }
          );
          console.log("dbUser/optometristController", newUser)
          db.Optometrist.createUser(newUser, function(err, user){
            if(err) throw err;
            res.send(user).end()
          });
        } else{
          res.status(500).send("{errors: \"Passwords don't match\"}").end()
        }
    },
}
