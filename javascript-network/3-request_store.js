#!/usr/bin/node
// This script get the contents of a webpage and stores it in a file
const request = require('request');
const fs = require('fs');

// Define the URL to request and the file path to store the response
const url = process.argv[2]; // Read the URL from command line arguments
const filePath = process.argv[3]; // Read the file path from command line arguments

if (!url || !filePath) {
  console.error('Usage: node script.js <URL> <output-file>');
  process.exit(1);
}

// Make a GET request to the URL
request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error(`Request failed with status code: ${response.statusCode}`);
  } else {
    // Write the response body to the specified file
    fs.writeFile(filePath, body, 'utf-8', (writeError) => {
      if (writeError) {
        console.error('Error writing to file:', writeError);
      }
    });
  }
});
