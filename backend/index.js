const express = require('express');
const cors = require('cors');
const { YoutubeTranscript } = require('youtube-transcript');
const dotenv = require('dotenv');
dotenv.config();


const port = process.env.PORT || 4000
const app = express();
app.use(cors());

app.get('/api/transcript/:id', async (req, res) => {
    try {
        const videoId = req.params.id;
        console.log(`Fetching transcript for video ID: ${videoId}`);
        const transcript = await YoutubeTranscript.fetchTranscript(videoId);

        if (!transcript || transcript.length === 0) {
            throw new Error('No transcript available for this video.');
        }

        res.json(transcript);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Failed to fetch transcript', details: err.message });
    }
});

app.listen(port, () => {
    console.log('Server is running on http://localhost:4000');
});
