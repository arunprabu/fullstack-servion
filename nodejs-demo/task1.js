const fs = require('fs');
const events = require('events');

// 1. emit custom event -- reading_started 
// 2. upon the above custom event emitted, readfile in async manner
// 3. once the file is read, emit another custom event -- read_over
// 4. in read_over, console log operation complete

let eventEmitter = new events.EventEmitter(); 

eventEmitter.on('reading_over', () => {
  console.log('Operation Complete');
});

eventEmitter.on('reading_started', ()=>{
  console.log('Reading Started');

  fs.readFile('sample.txt', (err, data) =>{
    if(!err){
      console.log(data.toString());
      
      eventEmitter.emit('reading_over');
    }else{
      console.log(err);
    }
  })
});

eventEmitter.emit('reading_started');


console.log("Program Ended.");



