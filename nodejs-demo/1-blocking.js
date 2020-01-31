// importing file system package 
const fs = require('fs');  

//reading file synchronously - so it is blocking i/o
let data = fs.readFileSync('sample.txt');

//will be printed first
console.log(data.toString());
//will be printed at last as the program runs 
// line by line and char by char -- sync
console.log('Program Ended');
