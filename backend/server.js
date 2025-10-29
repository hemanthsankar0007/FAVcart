const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const app = require("./app");

// Load environment variables
dotenv.config({ path: "./config/config.env" });

// ✅ Enforce CORS globally (even if app.js misses it)
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://favcart-frontend.vercel.app",
    ],
    credentials: true,
  })
);

// ✅ Connect database
connectDatabase();

// ✅ Start server
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on PORT: ${PORT} in ${process.env.NODE_ENV}`);
  console.log("✅ CORS enabled for frontend URLs");
});

// ✅ Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error(`❌ Error: ${err.message}`);
  console.error("Shutting down due to unhandled promise rejection...");
  server.close(() => process.exit(1));
});

// ✅ Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error(`❌ Error: ${err.message}`);
  console.error("Shutting down due to uncaught exception...");
  server.close(() => process.exit(1));
});
