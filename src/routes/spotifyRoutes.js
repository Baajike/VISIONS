const express = require('express');
const router = express.Router();

// Mock Spotify data for demonstration
const mockSpotifyData = [
    {
        id: 1,
        name: 'Song 1',
        artist: 'Artist 1',
        album: 'Album 1'
    },
    {
        id: 2,
        name: 'Song 2',
        artist: 'Artist 2',
        album: 'Album 2'
    }
];

// Route to get all songs (mock data for now)
router.get('/songs', (req, res) => {
    res.json(mockSpotifyData);
});

// Route to get a specific song by ID (mock data for now)
router.get('/songs/:id', (req, res) => {
    const songId = parseInt(req.params.id, 10);
    const song = mockSpotifyData.find(s => s.id === songId);
    if (song) {
        res.json(song);
    } else {
        res.status(404).send('Song not found');
    }
});

module.exports = router;

