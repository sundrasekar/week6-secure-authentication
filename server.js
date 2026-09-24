const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();

app.use(helmet());

app.use(cors());

app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(limiter);


// Authentication routes
app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
  res.json({
    message: "Week 6 Authentication API is running"
  });
});


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {

    console.log("MongoDB Connected Successfully");

    app.listen(process.env.PORT, () => {

      console.log(
        `Server running on http://localhost:${process.env.PORT}`
      );

    });

  })
  .catch((error) => {

    console.error(
      "MongoDB Connection Failed:",
      error.message
    );

  });