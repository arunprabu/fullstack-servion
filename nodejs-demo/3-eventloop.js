const events = require('events');

// Create an eventEmitter object
let eventEmitter = new events.EventEmitter(); 

eventEmitter.on('open_connection', ()=>{
  console.log('Connection opened');
});

eventEmitter.emit('open_connection');

