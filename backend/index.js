const express = require("express");
const app = express();
var cookieParser = require("cookie-parser");
var cors = require("cors");
require("./db/config");
const userRoute = require("./route/userRoute");

// app level middleware

// third party middleware
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  route
app.use("/api", userRoute);

const PORT = process.env.PORT || 4004;
app.use("/", (req, res) => {
  res.send("server runing");
});

app.listen(PORT, () => {
  console.log("server running on ", PORT);
});
