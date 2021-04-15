//Requiring necessary npm packages
const express = require("express");
var session = require("express-session");
const mongoose = require("mongoose");
const passport = require("./config/passport");
const path = require("path");


//setting up port
const PORT = process.env.PORT || 8080;

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(express.static("public"));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//Connecting to Mongoose with environment variables
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/mend", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      }
);

// Routes
//app.use(routes);
require("./controllers/api-routes")(app);
app.get("*", (req,res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"))
})

app.listen(PORT, () => {
  console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});



//Questions to ask
//do we need to sync mongoose db model var db = require("./models");  
            //&& db.sequelize.sync().then(function() {
