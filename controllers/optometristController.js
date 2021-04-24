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
          console.log("dbOptometrist/optometristController", newUser)
          db.Optometrist.createUser(newUser, function(err, user){
            if(err) throw err;
            res.send(user).end()
          });
        } else{
          res.status(500).send("{errors: \"Passwords don't match\"}").end()
        }
    },
    find: function(req,res) {
      db.Optometrist
        .find(req.body)
        .then(dbUser => {res.json(dbUser);})
        .catch(err => {res.status(422).json(err);});
    },
    searchPatient: function(req,res) {
      console.log("req query", req.query);
      db.User
      .findOne({
        name: req.query.name, 
        birthday: req.query.birthday,
        email: req.query.email
      })
      .then(user =>  {console.log("Optom patient search  =", user)
          res.status(200).json(user);})
    },
    load: function(req,res) {
      db.User.findOne({_id: req.user.symptoms})
      .then(symptoms => {
        console.log("Patient symptoms /OPtom", symptoms)
        res.status(200).json(symptoms);
      })
    }
    
}
