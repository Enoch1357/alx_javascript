#!/usr/bin/node
// This script prints the number of movies where the character “Wedge Antilles” is present.
const request = require('request');

// Define the Star Wars API endpoint
const apiUrl = 'https://swapi-api.alx-tools.com/api/films/';
const characterId = 18; // Wedge Antilles character ID

// Make a GET request to the API
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error(`Request failed with status code: ${response.statusCode}`);
  } else {
    const movies = JSON.parse(body);
    const count = movies.results.reduce((total, movie) => {
      if (movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
        return total + 1;
      }
      return total;
    }, 0);

    console.log(`Number of movies with Wedge Antilles: ${count}`);
  }
});
