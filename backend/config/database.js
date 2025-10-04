const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      readPreference: "primary", // Always read from primary for consistency
      retryWrites: true, // Retry writes if they fail
      w: "majority", // Wait for majority of nodes to confirm writes
      serverSelectionTimeoutMS: 5000, // How long to try selecting a server
      heartbeatFrequencyMS: 10000, // How often to check server health
    })
    .then((con) => {
      console.log(
        `MongoDB Replica Set is connected to: ${con.connection.host}`
      );
      console.log(`Database: ${con.connection.db.databaseName}`);
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error);
      process.exit(1);
    });
};

module.exports = connectDatabase;
