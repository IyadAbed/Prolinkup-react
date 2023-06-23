const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouts = require("./Routes/userRouter");
const specialist = require("./Routes/specialistRouter");
const port = process.env.PORT;
const dbUrl = process.env.DBURL;
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Welcome");
});
app.use(userRouts);
app.use(specialist);

module.exports = {
  server: app,
  start: () => {
    mongoose
      .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log("connected to mongoDB"))
      .then(() => {
        app.listen(port, () => {
          console.log(`server is running on port ${port}`);
        });
      });
  },
};
