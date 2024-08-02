const express = require("express");
const cors = require("cors");
const connectToMongo = require("./db");
// Connect to MongoDB and start the server
const startServer = async () => {
  try {
    await connectToMongo();
    console.log("Database connected successfully");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1); // Exit the process if there is an error
  }
};
startServer();

const app = express();
const port = 5000;
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Define available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

// Root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
