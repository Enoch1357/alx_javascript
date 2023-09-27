#!/usr/bin/node
// This script contains a class 'Rectangle'
class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
        return {};
      }
  
      this.width = w;
      this.height = h;
    }
  
    print() {
      if (!this.width || !this.height) {
        return;
      }
  
      for (let i = 0; i < this.height; i++) {
        console.log('X'.repeat(this.width));
      }
    }
  
    rotate() {
      const temp = this.width;
      this.width = this.height;
      this.height = temp;
    }
  
    double() {
      this.width *= 2;
      this.height *= 2;
    }
  }
  
module.exports = Rectangle;
  