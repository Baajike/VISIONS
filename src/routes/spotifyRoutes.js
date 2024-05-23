const express = require('express');
const router = express.Router();
const axios = require('axios');
const querystring = require('querystring');

router.get('/login', (req, res) => {
    const scope = 'user-read-private user-read-email';
    const params = querystring.stringify({
        response_type: 'code',
        client_id: process.env.SPOTIFY_CLIENT_ID,
        scope: scope,
        redirect_uri: process.env.REDIRECT_URI,
    });

    res.redirect(`https://accounts.spotify.com/authorize?${params}`);
});

module.exports = router;

