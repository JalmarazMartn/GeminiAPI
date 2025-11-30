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
            "text": "Generate test data for a customer database with 10 entries. Each entry should include a unique customer ID, full name, email address, phone number, and physical address." + 
            "Must be spanish names and addresses form Madrid" +
            "Format the output as a JSON array: [{\"CustomerID\": , \"FullName\": , \"Email\": , \"PhoneNumber\": , \"Address\":  }]"
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

