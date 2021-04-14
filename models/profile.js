const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const profileSchema = new Schema({
    name: {
        type: String,
        trim: true, 
        required: "Enter a name to create your profile"
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
      },
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [({ length }) => length >= 6, "Password should be longer."]
      },
    dob: {
        type: Date
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
            ref: "symptom"
        }
    ]
});

//Hashing password with bycrpt   *******need to double check this is working properly*****
profileSchema.pre("Save", async function (next) {
    const user = this;
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next ();
})

///Trying to change dob entry to an age value   ******need to check age calc is saving to schema
profileSchema.methods.setAge = function () {
    const from = dob.split("/");
    const birthdateTimeStamp = new Date(from[2], from[1] - 1, from[0]);
    const cur = new Date();
    const diff = cur - birthdateTimeStamp; //difference in milliseconds)
    const currentAge = Math.floor(diff/31557600000); //Divide by 1000*60*60*24*365.25
    this.age = currentAge;

    return this.age;
}


const Profile = mongoose.model("profile", profileSchema);

module.exports = Profile;



