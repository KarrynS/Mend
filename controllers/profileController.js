const db = require("../models");

//Defining methods for profileController
module.exports = {
    create: function(req,res) {
        db.Profile.create(req.body)
        .then(dbUser => {
            res.json(dbUser);
        })
        // .then(() => {
        //   res.redirect(301, "/dashboard");
        // })
        .catch(err => {
            res.status(422).json(err);
        });
    }
}

