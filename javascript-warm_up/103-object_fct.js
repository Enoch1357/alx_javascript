#!/usr/bin/node
const myObject = {
    type: 'object',
    value: 12
  };
  console.log(myObject);

  myObject.incr = function() {
    this.value++;
  }

  myObject.toString = (value) => {
    value++;
    return `{ type: 'object', value: ${value}, incr: [Function] }`;
  }

  myObject.incr();
  console.log(myObject.toString(12));
  myObject.incr();
  console.log(myObject.toString(13));
  myObject.incr();
  console.log(myObject.toString(14));