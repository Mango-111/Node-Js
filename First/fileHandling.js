import fs from 'fs'
//asynchronous
fs.readFile('notes.txt',(err,data)=>{
    if(err) throw err;
    console.log(data);
})
