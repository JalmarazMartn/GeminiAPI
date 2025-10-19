var fs = require('fs');
var request = require('request');

var IMG_PATH = 'C:/Users/Jesus/Pictures/invoice-sample.pdf'; // Invoice example

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
            mime_type: 'application/pdf',
            data: imageData
          }
        },
        { text: 'Extract invoice details such as invoice number, date, total amount, and vendor name from the document above. Return only a JSON with {"Invoice No.","Vendor Name""Customer Name","Date","Total Amount"},Format Date dd/mm/YYYY'}
      ]
    }]
  })
};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
