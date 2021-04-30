const db = require("../models");

//Defining methods for symptomController
module.exports = {
    create: function(req,res) {
        console.log("body = ", req.body)
        db.Symptom.create(req.body)
        .then(dbSymptom => {
            console.log("req.user", req.user)
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
            .then(dbSymptom => dbSymptom.remove())
            .then(dbSymptom => res.json(dbSymptom))
            .catch(err => res.status(422).json(err));
      },
    load: function(req,res) {
        db.Symptom.find({ _id: req.user.symptoms})
            .sort({ date: -1})
            .then(symptoms =>  {
            console.log("symptoms =", symptoms)
            res.status(200).json(symptoms);
        })
    },
    update: function(req,res) {
        db.Symptom.findOneAndUpdate({_id: req.params.id }, req.body)
        .then(dbSymptom => res.json(dbSymptom))
        .catch(err => res.status(422).json(err));
    }
   
}