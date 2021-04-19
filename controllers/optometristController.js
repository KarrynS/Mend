const db = require("../models");

//Defining methods for optometrist Controller
module.exports = {
    create: function(req,res) {
        db.Optometrist.create(req.body)
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
