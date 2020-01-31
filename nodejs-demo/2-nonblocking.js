const fs = require('fs');

fs.readFile('sample.txt', (err, data ) =>{ // error first callback
  if(!err){
    console.log(data.toString());
  }else{
    console.log(err);
  }
});

//the following line will get executed first 
//while fs is reading the file
console.log('Program Ended');
