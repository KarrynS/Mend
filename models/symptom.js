const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const symptomSchema = new Schema({
    eye: {
        type: String,
        required: "Please select a valid option"
    },
    soreEye: {
        type: Boolean,
        default: false
    },
    redEye: {
        type: Boolean,
        default: false
    },
    dryEye: {
        type: Boolean,
        default: false
    },
    itchyEye: {
        type: Boolean,
        default: false
    },
    blurryVision: {
        type: Boolean,
        default: false
    },
    lossofVision: {
        type: Boolean,
        default: false
    },
    doubleVision: {
        type: Boolean,
        default: false
    },
    headaches: {
        type: Boolean,
        default: false
    },
    floaters: {
        type: Boolean,
        default: false
    },
    flashes: {
        type: Boolean,
        default: false
    },
    pain: {
        type: Number,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
      },
})

const Symptom = mongoose.model("symptom", symptomSchema);

module.exports = Symptom;