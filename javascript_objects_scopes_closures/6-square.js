#!/usr/bin/node
// This script contains a class 'Square' that inherits from 'Rectangle'
const OldSquare = require('./5-square');

class Square extends OldSquare {
  charPrint(c = 'X') {
    for (let i = 0; i < this.height; i++) {
      console.log(c.repeat(this.width));
    }
  }
}

module.exports = Square;
