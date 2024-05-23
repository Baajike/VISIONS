const express = require('express');
const router = express.Router();
const spotifyController = require('./controllers/spotifyController');
const visualizationController = require('./controllers/visualizationController');

// Home route
router.get('/', (req, res) => {
  res.send('Welcome to VISIONS Music Visualization App');
});

// Route to get Spotify data
router.get('/spotify', spotifyController.getSpotifyData);

// Route for music visualization
router.get('/visualize', visualizationController.visualizeMusic);

module.exports = router;

