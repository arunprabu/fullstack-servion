const fs = require('fs');

const txt = 'my first file written in nodejs';

fs.writeFile('dummy.txt', txt , (err) => {
  if(!err){
    console.log('writing over');
  }else{
    console.log(err);
  }
});
