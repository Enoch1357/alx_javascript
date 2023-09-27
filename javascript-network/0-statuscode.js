#!/usr/bin/node
// This script displays the status code of a GET request.
const request = require('request');

const url = process.argv[2];

if (!url) {
  console.error('Usage: node script.js <URL>');
  process.exit(1);
}

request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});
