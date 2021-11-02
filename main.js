//Create a basic project to demonstrate error first callback mechanism using fs
// Error-First callback pattern
// Continuation-Passing style: callbacks are continuation functions

let fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
  //err could be null
  if (err) return err;

  //don't run this if err not null
  console.log(data);
});
