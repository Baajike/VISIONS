const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB', error));

// Import routes
const spotifyRoutes = require('./routes/spotifyRoutes');

// Use routes
app.use('/api/spotify', spotifyRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

