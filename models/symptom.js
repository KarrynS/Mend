const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const symptomSchema = new Schema({
    eye: {
        type: String,
        required: "Please select a valid option"
    },
    soreEye: {
        type: String,
        default: false
    },
    redEye: {
        type: String,
        default: false
    },
    dryEye: {
        type: String,
        default: false
    },
    itchyEye: {
        type: String,
        default: false
    },
    blurryVision: {
        type: String,
        default: false
    },
    lossofVision: {
        type: String,
        default: false
    },
    doubleVision: {
        type: String,
        default: false
    },
    headaches: {
        type: String,
        default: false
    },
    floaters: {
        type: String,
        default: false
    },
    flashes: {
        type: String,
        default: false
    },
    pain: {
        type: String,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
      },
})

const Symptom = mongoose.model("Symptom", symptomSchema);

module.exports = Symptom;