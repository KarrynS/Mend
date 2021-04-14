const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const practitionerSchema = new Schema({
    name: {
        type: String,
        trim: true, 
        required: "Enter a name to create your profile"
    },
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [({ length }) => length >= 6, "Password should be longer."]
    },
    patients: [
        {
            type: Schema.Types.ObjectId,
            ref: "profile"
        }
    ]

})

const Practitioner = mongoose.model("practitioner", practitionerSchema);

module.exports = Practitioner;

