#!/usr/bin/node
// This script prints the title of a Star Wars movie where the episode number matches a given integer.
const request = require('request');

// Get the movie ID from command line argument
const movieId = process.argv[2];

if (!movieId) {
  console.error('Usage: node script.js <movie ID>');
  process.exit(1);
}

// Define the Star Wars API endpoint
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the API
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error(`Request failed with status code: ${response.statusCode}`);
  } else {
    const movie = JSON.parse(body);
    console.log(`${movie.title}`);
  }
});
