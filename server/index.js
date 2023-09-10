require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
userRoute = require("./routes/userRoute");
ticketsRoute = require("./routes/ticketsRoute");
usersTickets = require('./routes/usersTicketRoute');
mongoose.connect(process.env.MONGO_URI);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 5004;
app.use("/api/user", userRoute);
app.use("/api/tickets", ticketsRoute);

app.use(function (req, res, next) {
  res.setHeader("Content-Security-Policy", "frame-ancestors 'none';");
  next();
});

// const _dirname = path.dirname("");
// const buildPath = path.join(_dirname, "../client/build");

// app.use(express.static(buildPath));

// app.get("/*", function (req, res) {
//   res.sendFile(
//     path.join(__dirname, "../client/build/index.html"),
//     function (err) {
//       if (err) {
//         res.status(500).send(err);
//       }
//     }
//   );
// });

// if (process.env.NODE_ENV === "production") {
//   app.use("/", express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client/build/index.html"));
//   });
// }

app.listen(port, () => {
  console.log("Server is running");
});
