#!/usr/bin/node
// This script contains a class 'Rectangle' with two attributes width and height
class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
        return {};
      }
  
      this.width = w;
      this.height = h;
    }
  }
  
  module.exports = Rectangle;
