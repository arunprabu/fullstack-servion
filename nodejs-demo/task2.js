const fs = require('fs');
const events = require('events');
// Create an eventEmitter object
let eventEmitter = new events.EventEmitter(); 

//1. read file async'ly 'dummy.txt'
fs.readFile('dummy.txt', (err, data ) =>{ 
  if(!err){
    console.log(data.toString());

    eventEmitter.on('read_over', ()=>{
      //3. in read_over, write a file named dummy1.txt -- with read data
      fs.writeFile('dummy1.txt', data , (err) => {
        if(!err){
          console.log('writing over');
          eventEmitter.on('file_writing_successful', ()=>{
            // 5. in that custom event, read file async'ly 'dummy1.txt' 
            fs.readFile('dummy1.txt', (err, _data ) =>{ 
              if(!err){
                //6. and display dummy1.txt data 
                console.log(_data.toString());
              }else{
                console.log(err);
              }
            });
          });
          eventEmitter.emit('file_writing_successful');
        }else{
          console.log(err);
        }
      });
    })

    //2. upon successfully read, emit custom event 'read_over'
    eventEmitter.emit('read_over');

  }else{
    console.log(err);
  }
});

//Note: You can see callback hell 