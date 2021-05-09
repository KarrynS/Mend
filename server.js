//Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
var MongoStore = require('connect-mongo');
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
const routes = require("./routes");
const cors = require("cors");
const socket = require("socket.io");

//setting up port
const PORT = process.env.PORT || 8080;

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

//app.use(express.static("public"));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}





// We need to use sessions to keep track of our user's login status
app.use(session(
  { secret: "keyboard cat", 
    resave: true, 
    saveUninitialized: true, 
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI || "mongodb://localhost/mend",
    })
  })
);
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
app.use(routes);
//require("./controllers/api-routes")(app);
app.get("*", (req,res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
})


const server = app.listen(PORT, () => {
  console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});

//Socket.io
io = socket(server);

// Runs when client connects
io.on("connection", (socket) => {
  console.log("Initial connection: ", socket.id)
  
  // when a user connects
  socket.on("join_room", (data) => {
    socket.join(data)
    console.log("New socket connection: " + data)
  })

  //listening for chat message
  socket.on("chat_message", (data) => {
    console.log("chat_message", data)
    socket.to(data.room).emit("receive_message", data.content)

  })

  // Runs when the client disconects
  socket.on("disconnect", () => {
    console.log("User disconnected")
    socket.emit("join_room", 'A user has left the chat')
  })
})