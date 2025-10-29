const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const app = require("./app");

// Load environment variables
dotenv.config({ path: "./config/config.env" });

// ✅ CORS configuration — allows requests from your frontend (localhost + vercel)
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://favcart-frontend.vercel.app",
    ],
    credentials: true, // allow cookies, tokens, etc.
  })
);

// ✅ Connect to MongoDB
connectDatabase();

// ✅ Server port
const PORT = process.env.PORT || 5000;

// ✅ Start server
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on PORT: ${PORT} in ${process.env.NODE_ENV}`);
});

// ✅ Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`❌ Error: ${err.message}`);
  console.log("Shutting down due to unhandled promise rejection...");
  server.close(() => process.exit(1));
});

// ✅ Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`❌ Error: ${err.message}`);
  console.log("Shutting down due to uncaught exception...");
  server.close(() => process.exit(1));
});
