var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
  'headers': {
    'Content-Type': 'application/json',
    'X-goog-api-key': 'AIzaSyCKh3ItJZMT01_nstrj33qev_b0e3pjsdk'
  },
  body: JSON.stringify({
    "contents": [
      {
        "parts": [
          {
            "text": "Explain how to conne to Gemini API without SDK with Node request"
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

