#!/usr/bin/node
// This script computes the number of tasks completed by user id.
const request = require('request');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const userId = process.argv[2];

if (!userId) {
  console.error('Usage: node script.js <user-id>');
  process.exit(1);
}

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error(`Request failed with status code: ${response.statusCode}`);
  } else {
    const tasks = JSON.parse(body);

    const completedTasks = tasks.filter((task) => task.userId === parseInt(userId) && task.completed);

    const numCompletedTasks = completedTasks.length;

    console.log({userId: numCompletedTasks});
  }
});
