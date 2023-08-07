const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouts = require("./Routes/userRouter");
const projectRouter = require("./Routes/projectRouter");
const port = process.env.PORT;
const dbUrl = process.env.DBURL;
const path = require("path");
const chatRoutes = require('./Routes/chatRoutes');
const aboutRouter = require('./Routes/aboutRoutes')

const app = express();
app.use(cors());
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(userRouts);
app.use(projectRouter);
app.use(chatRoutes);
app.use(aboutRouter);


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
