const axios = require('axios');
const qs = require('qs');
require('dotenv').config();

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

const getSpotifyAccessToken = async () => {
  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const data = qs.stringify({
    grant_type: 'client_credentials'
  });

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`
  };

  try {
    const response = await axios.post(tokenUrl, data, { headers });
    console.log('Access Token:', response.data.access_token);
  } catch (error) {
    console.error('Error getting Spotify access token:', error);
  }
};

getSpotifyAccessToken();

