const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample music feed data
const feedData = [
  {
    id: 1,
    title: "Song One",
    artist: "Artist One",
    url: "path_to_song_one.mp3",
    cover: "path_to_cover_one.jpg"
  },
  {
    id: 2,
    title: "Song Two",
    artist: "Artist Two",
    url: "path_to_song_two.mp3",
    cover: "path_to_cover_two.jpg"
  }
  // Add more songs as needed
];

app.get('/api/feed', (req, res) => {
  res.json(feedData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
