#!/usr/bin/node
// This script contains a function 'welcome'
function welcome(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
  
    function displayFullName() {
      alert(`Welcome ${fullName}!`);
    }
  
    displayFullName();
  }
 