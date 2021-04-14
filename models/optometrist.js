const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const optometristSchema = new Schema({
    pracitioner: {
        type: String,
    },
    businessName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    }
});

const Optometrist = mongoose.model("optometrist", optometristSchema);

module.exports = Optometrist;