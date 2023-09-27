#!/usr/bin/node
// This script prints the number of movies where the character “Wedge Antilles” is present.
// Your JSON data
const data = {
    "count": 7,
    "next": null,
    "previous": null,
    "results": [
      // ... (your movie data)
    ]
  };
  
  // Function to count movies with a specific character
  function countMoviesWithCharacter(data, characterUrl) {
    let count = 0;
    data.results.forEach(movie => {
      const characters = movie.characters;
      if (characters.includes(characterUrl)) {
        count++;
      }
    });
    return count;
  }
  
  // Define the character you want to search for (e.g., "Wedge Antilles")
  const characterToSearch = "http://swapi.co/api/people/18/";
  
  // Count movies with the specified character
  const numMovies = countMoviesWithCharacter(data, characterToSearch);
  
  // Print the result
  console.log(`${numMovies}`);
  