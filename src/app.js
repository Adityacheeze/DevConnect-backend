require('dotenv').config();
const express = require("express");
const connectDB = require("./config/database.js");
const cookieParser = require("cookie-parser");

const app = express();
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user.js");
const cors = require("cors");
const healthRouter = require('./routes/health.js');

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);
app.use("/", healthRouter);

connectDB()
  .then(() => {
    console.log("Database connected");
    app.listen( process.env.PORT, () => {
        const port = process.env.PORT || 3000;
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
