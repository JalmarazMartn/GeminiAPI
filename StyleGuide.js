var request = require('request');
var APIKey = require('./APIKey.json');
var StyleGuideURL = "https://blogsterapp.com/es/comunicacion-para-empresas-palabras-prohibidas/";
var textToEvaluate = "No se deberían admitir viejos de 56 años en la empresa.";
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
            "text": "Siguiendo esta guía de estilo: " + StyleGuideURL +
            "evalúa el siguiente texto y sugiere mejoras. La respuesta debe ser concisa y en JSON, con dos datos: " +
            "{CumpleGuia: puntuación cumplimiento de 1 a 10, Sugerencia: Sugerencia de longitud similar a la entrada,MayorError: de forma concisa destaca el mayor error del texto}" +
            "Este es el texto a evaluar: "
             + textToEvaluate
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
  
  try {
    // Parse the response body
    var responseData = JSON.parse(response.body);
    
    // Extract the text content from the response
    var textContent = responseData.candidates[0].content.parts[0].text;
    
    // Extract JSON from markdown code block if present
    var jsonMatch = textContent.match(/```json\n([\s\S]*?)\n```/);
    var jsonData;
    
    if (jsonMatch) {
      jsonData = JSON.parse(jsonMatch[1]);
    } else {
      jsonData = JSON.parse(textContent);
    }
    
    // Log only the required fields
    console.log('CumpleGuia:', jsonData.CumpleGuia);
    console.log('Sugerencia:', jsonData.Sugerencia);
    console.log('MayorError:', jsonData.MayorError);
  } catch (e) {
    console.error('Error parsing response:', e.message);
    console.log('Raw response:', response.body);
  }
});

