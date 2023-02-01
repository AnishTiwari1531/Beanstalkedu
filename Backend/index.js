const express = require("express");
const mongoose = require("mongoose");
const route = require("./src/routes");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(multer().any());

app.use("/", route);

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://Anish_Tiwari1531:SINGH1531@cluster0.40jpapr.mongodb.net/Beanstalkedu",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )

  .then(() => console.log("MongoDb is connected..."))
  .catch((err) => console.log(err));


app.listen(process.env.PORT || 5000, function () {
  console.log("App running on port " + (process.env.PORT || 5000));
});
