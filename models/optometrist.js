const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const passport = require("passport");

const Schema = mongoose.Schema;

const optometristSchema = new Schema({
    username: {
        type: String,
        index:true
    },
    password: {
        type: String
    },
  
    email: {
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    name: {
    type: String
    },
    patients: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    role: {
        type: String,
        default: "Optometrist"
    }
});

const Optometrist = mongoose.model("Optometrist", optometristSchema);

module.exports = Optometrist;

module.exports.createUser = function(newUser, callback){
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(newUser.password, salt, function(err, hash) {
        newUser.password = hash;
        newUser.save(callback);
      });
    });
  }

module.exports.getUserByUsername = function(username, callback){
var query = {username: username};
Optometrist.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
Optometrist.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if(err) throw err;
    callback(null, isMatch);
});
}

