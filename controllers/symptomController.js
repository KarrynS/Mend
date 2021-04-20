const db = require("../models");

//Defining methods for symptomController
module.exports = {
    create: function(req,res) {
        console.log("body = ", req.body)
        db.Symptom.create(req.body)
        .then(dbSymptom => {
            console.log(req.user)
            db.User.findOneAndUpdate({
                _id: req.user._id
            }, {$push: {symptoms: dbSymptom._id}})
            .then(dbUser => {
                res.json(dbUser);
            })
        })
        .catch(err => {
            res.status(422).json(err)
        });
    },
    remove: function(req, res) {
        db.Symptom.findById({ _id: req.params.id })
          .then(dbUser => dbUser.remove())
          .then(dbUser => res.json(dbUser))
          .catch(err => res.status(422).json(err));
      },
    load: function(req,res) {
        db.Symptom.find({ _id: req.user.symptoms})
        .then(symptoms =>  {
            console.log("symptoms =", symptoms)
            res.status(200).json(symptoms);
        })
    }
   
}