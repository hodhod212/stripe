
const fs = require('fs');

fs.writeFile('./data.json', "Abbe", (err)=> {
 if(err){
     console.log(err);
 }else {
     console.log("finished writing")
 }
});
  console.log("after")