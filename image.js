var fs = require('fs');
var request = require('request');

//var IMG_PATH = 'C:/Users/Jesus/Pictures/CreditCard.png'; // Credit card
var IMG_PATH = 'C:/Users/Jesus/Pictures/Krystal York.jpg'; // Get person genre

var APIKey = require('./APIKey.json');

// Read and encode image as base64
var imageData = fs.readFileSync(IMG_PATH).toString('base64');

var options = {
  method: 'POST',
  url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent',
  headers: {
    'Content-Type': 'application/json',
    'x-goog-api-key': APIKey.APIKey
  },
  body: JSON.stringify({
    contents: [{
      parts: [
        {
          inline_data: {
            mime_type: 'image/jpeg',
            data: imageData
          }
        },
        //{ text: 'Caption this image.' }//Original
        //{ text: 'You are an OCR expert. Extract all text from the image above.' }//Credit card
        { text: 'Get genre man or woman person form the image'}
      ]
    }]
  })
};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
