const axios = require('axios');

async function getSpotifyAccessToken() {
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', process.env.SPOTIFY_CLIENT_ID);
  params.append('client_secret', process.env.SPOTIFY_CLIENT_SECRET);

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', params);
    return response.data.access_token;
  } catch (error) {
    console.error('Failed to get Spotify access token:', error);
  }
}

module.exports = getSpotifyAccessToken;

