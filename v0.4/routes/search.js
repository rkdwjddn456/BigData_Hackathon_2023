const express = require('express');
const router = express.Router();
const axios = require('axios');

require('dotenv').config();

router.get('/', (req, res) => {
  const query = req.query.query;

  // Call Chat GPT API or perform your search logic here
  // For example, using Chat GPT API:
  axios
    .post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
      prompt: query,
      max_tokens: 100,
      temperature: 0.7,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_KEY}`, // Replace with your Chat GPT API key
      },
    })
    .then((response) => {
      const { choices } = response.data;
      const answer = choices[0].text.trim();

      // Render the search results template with the answer
      res.render('search', { answer });
    })
    .catch((error) => {
      console.log('Error:', error.response.data);
      // Handle the error and render an error template or appropriate response
      res.status(500).send('An error occurred');
    });
});

module.exports = router;