#!/usr/bin/node
// This script prints the number of movies where the character “Wedge Antilles” is present.
const request = require('request');

// Check if the API URL is provided as an argument
const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Please provide the API URL as an argument.');
  process.exit(1);
}

// Character ID for "Wedge Antilles"
const characterId = 18;

// Function to count movies with the specified character
function countMoviesWithCharacter(apiUrl, characterId) {
  request(apiUrl, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
      process.exit(1);
    }

    if (response.statusCode !== 200) {
      console.error(`API returned a non-200 status code: ${response.statusCode}`);
      process.exit(1);
    }

    try {
      const data = JSON.parse(body);
      const movies = data.results.filter(movie => movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`));
      console.log(`${movies.length}`);
    } catch (parseError) {
      console.error('Error parsing API response:', parseError);
      process.exit(1);
    }
  });
}
