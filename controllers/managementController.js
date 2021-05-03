const db = require("../models");

//Defining methods for managementController
module.exports = {
    create: function(req, res) {
        console.log("Management body = ", req.body)
        db.Management.create(req.body)
        .then(dbManagement => {
            console.log("dbManagement req.body", req.body)
            db.User.findOneAndUpdate({
                _id: req.body.patient
            }, {$push: {management: dbManagement._id}})
            .then(dbUser => {
                res.json(dbUser);
            })
            .catch(err => {
                res.status(422).json(err)
            })
        })
    },
    remove: function(req, res) {
        db.Management.findById({ _id: req.params.id })
        .then(dbManagement => dbManagement.remove())
        .then(dbManagement => res.json(dbManagement))
        .catch(err => res.status(422).jsom(err));
    },
    load: function(req,res) {
        db.Management.find({ _id: req.user.management})
            .sort({ date: -1})
            .then(userData =>  {
            console.log("symptoms =", userData)
            res.status(200).json(userData);
        })
    },
}