const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const managementSchema = new Schema({
    review: {
        type: String,
    }, 
    diagnosis: {
        type: String,
    },
    treatment: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Management = mongoose.model("Management", managementSchema);

module.exports = Management;