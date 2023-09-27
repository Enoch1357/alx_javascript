#!/usr/bin/node
// This script contains a class 'Rectangle'
class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
        // Create an empty object
        return {};
      }
  
      this.width = w;
      this.height = h;
    }
  
    print() {
      if (!this.width || !this.height) {
        // If width or height is zero or not a positive integer, print nothing
        return;
      }
  
      for (let i = 0; i < this.height; i++) {
        console.log('X'.repeat(this.width));
      }
    }
  }
  
module.exports = Rectangle;
  