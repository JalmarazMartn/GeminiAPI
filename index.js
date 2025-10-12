var request = require('request');
var APIKey = require('./APIKey.json');
var options = {
  'method': 'POST',
  'url': 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
  'headers': {
    'Content-Type': 'application/json',
    'X-goog-api-key': APIKey.APIKey
  },
  body: JSON.stringify({
    "contents": [
      {
        "parts": [
          {
            "text": "Explain how to connect to Gemini API without SDK with Node request"
          }
        ]
      }
    ],
    "generation_config": {
      "max_output_tokens": 1000,
      "temperature": 1
    }
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

