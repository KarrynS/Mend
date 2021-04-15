const db = require("../models")

module.exports = {
    create: function(req, res) {
        db.Profile
            .create(req.body)
            .then(dbProfile => res.json(dbProfile))
            // .then(() => {
            //     res.redirect(301, "/dashboard");
            //   })
            .catch(err => res.status(422).json(err));
    }
};