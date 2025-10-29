const app = require("./app");
const connectDatabase = require("./config/database");
const dotenv = require("dotenv");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to MongoDB
connectDatabase();

const PORT = process.env.PORT || 5000;

// Start server
const server = app.listen(PORT, () => {
  console.log(`✅ Server running on PORT: ${PORT} in ${process.env.NODE_ENV}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`❌ Error: ${err.message}`);
  console.log("Shutting down due to unhandled rejection...");
  server.close(() => process.exit(1));
});

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`❌ Error: ${err.message}`);
  console.log("Shutting down due to uncaught exception...");
  server.close(() => process.exit(1));
});
