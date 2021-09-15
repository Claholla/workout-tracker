const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbWorkout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// routes
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/urlRoutes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});