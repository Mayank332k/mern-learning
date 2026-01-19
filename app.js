require("dotenv").config();
const express = require("express");
const app = express();
const dataRouter = require("./routes/dataRoutes");
const cors = require("cors");
const port = 3000;
const { mongoConnect } = require("./Database");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", dataRouter);

mongoConnect()
  .then(() => {
    app.listen(port, () => {
      console.log("connected mongo!");
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("error while conencting to database", err);
  });
