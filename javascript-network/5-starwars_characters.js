#!/usr/bin/node
// This script prints all characters of a Star Wars movie
const request = require('request');

// Define the Star Wars API URL
const apiUrl = `https://swapi-api.alx-tools.com/api/films/`;

// Read the Movie ID from the command line arguments
const movieId = process.argv[2];

if (!movieId) {
  console.error('Usage: node star_wars_characters.js <movie-id>');
  process.exit(1);
}

// Make a GET request to the Star Wars API
request.get(apiUrl + movieId, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error(`Request failed with status code: ${response.statusCode}`);
  } else {
    // Parse the JSON response
    const movieData = JSON.parse(body);

    // Display the characters of the movie
    console.log(`Characters in "${movieData.title}":`);
    for (const characterUrl of movieData.characters) {
      request.get(characterUrl, (charError, charResponse, charBody) => {
        if (charError) {
          console.error('Error:', charError);
        } else if (charResponse.statusCode !== 200) {
          console.error(`Request failed with status code: ${charResponse.statusCode}`);
        } else {
          const characterData = JSON.parse(charBody);
          console.log(characterData.name);
        }
      });
    }
  }
});
