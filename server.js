// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const { registerUser, loginUser } = require("./controllers/userController");
const bookingRoutes = require("./routes/bookingRoutes");
const profileRoutes = require("./routes/profileRoutes");
//const weatherRoutes = require("./routes/weatherRoutes");
const staffRoutes = require("./routes/staffRoutes");
const arenaRoutes = require("./routes/arenaRoutes");
const arenaB = require("./routes/arenaBookRoute");
const itemRoutes = require("./routes/itemRoutes");
const orderRoutes = require('./routes/orderRoutes');


// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 5006;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (err) => {
  console.error("MongoDB connection error", err);
});
db.once("open", () => {
  console.log("MongoDB is connected");
});

// Routes
app.post("/register", registerUser);
app.post("/login", loginUser);
app.use("/api/staff", staffRoutes);
app.use("/api/arena", arenaRoutes);
app.use("/api/arenaBookings", arenaB);
app.use("/api/items", itemRoutes);
app.use('/api/orders', orderRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
