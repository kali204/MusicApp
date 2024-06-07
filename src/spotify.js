

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "4557e18f2eea4b9fac3e620b35381c06";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

