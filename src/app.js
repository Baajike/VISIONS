require('dotenv').config();
console.log('MONGO_URI:', process.env.MONGO_URI); // Add this line
const express = require('express');
const mongoose = require('mongoose');
const spotifyRoutes = require('./routes/spotifyRoutes');

const app = express();
const PORT = 4000;

// Connect to MongoDB
const mongoUri = process.env.MONGO_URI;
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Failed to connect to MongoDB', error);
});

// Middleware
app.use(express.json());

// Routes
app.use('/api/spotify', spotifyRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

