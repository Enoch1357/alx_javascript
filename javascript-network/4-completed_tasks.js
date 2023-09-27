#!/usr/bin/node
// This script computes the number of tasks completed by user id.
const request = require('request');

// Define the API URL
const apiUrl = process.argv[2]; // Read the API URL from command line arguments

if (!apiUrl) {
  console.error('Usage: node 4-completed_tasks.js <api-url>');
  process.exit(1);
}

// Make a GET request to the API URL
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error(`Request failed with status code: ${response.statusCode}`);
  } else {
    // Parse the JSON response
    const tasks = JSON.parse(body);

    // Initialize an object to store the count of completed tasks for each user
    const completedTaskCounts = {};

    // Loop through tasks and count completed tasks for each user
    for (const task of tasks) {
      if (task.completed) {
        if (completedTaskCounts[task.userId]) {
          completedTaskCounts[task.userId]++;
        } else {
          completedTaskCounts[task.userId] = 1;
        }
      }
    }

    console.log(completedTaskCounts);
  }
});
