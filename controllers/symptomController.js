const db = require("../models");

//Defining methods for symptomController
module.exports = {
    create: function(req,res) {
        db.Symptom.create(req.body)
        .then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => {
            res.status(422).json(err)
        });
    },
    delete: function(req, res) {
        db.Symptom.remove({
                id:req.params.id,
        })
        .then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => {
            res.status(422).json(err)
        });
    },
   
}