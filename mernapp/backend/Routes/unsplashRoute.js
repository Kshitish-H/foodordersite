const express = require('express');
const router = express.Router();
const fetch = require('node-fetch'); // or axios

require('dotenv').config();

router.get('/unsplash/:query', async (req, res) => {
  try {
    const query = req.params.query;
    const accessKey = process.env.UNSPLASH_ACCESS_KEY;

    const response = await fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${accessKey}`);
    const data = await response.json();

    res.json({ url: data.urls.regular });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch image from Unsplash' });
  }
});

module.exports = router;