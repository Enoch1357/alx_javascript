#!/usr/bin/node
// This function increments and calls a function
exports.addMeMaybe = (number, theFunction) => {
    number += 1;
    theFunction(number);
}