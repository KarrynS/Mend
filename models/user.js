const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true, 
        required: "Enter a name to create your profile"
    },
    username: {
        type: String,
        index:true,
        required: "Please enter a user name"
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        required: "Please enter an email address"
      },
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [({ length }) => length >= 6, "Password should be longer."]
      },
    birthday: {
        type: String
    },
    treatment: {
        diagnosis: String,
        treatment: String,
        date: String
    },
    age: {
        type: Number
    },
    userCreated: {
        type: Date,
        default: Date.now
    },
    symptoms: [
        {
            type: Schema.Types.ObjectId,
            ref: "Symptom"
        }
    ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;

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
User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if(err) throw err;
    callback(null, isMatch);
});
}




///Trying to change dob entry to an age value   ******need to check age calc is saving to schema
userSchema.pre("Save", function () {
    const from = birthday.split("/");
    const birthdateTimeStamp = new Date(from[2], from[1] - 1, from[0]);
    const cur = new Date();
    const diff = cur - birthdateTimeStamp; //difference in milliseconds)
    const currentAge = Math.floor(diff/31557600000); //Divide by 1000*60*60*24*365.25
    this.age = currentAge;

    return this.age;
})





