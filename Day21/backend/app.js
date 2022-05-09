const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/note-routes");

const app = express();

// middlewire

app.use(express.json());
app.use("/notes", router);

// connect to mongo db
mongoose
  .connect(
    "mongodb+srv://admin:pw8UcMsk2XPzPu2z@cluster0.2h72k.mongodb.net/note-database?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected"))
  .then(() => {
    app.listen(5000);
  })
  .catch((error) => console.log(error));

//password:
