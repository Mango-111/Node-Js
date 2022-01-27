import fs from 'fs'
fs.appendFile('note1.txt',"Hello World",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("content after file append");
        fs.readFileSync('note1.txt',"utf-8");
        console.log(fs.readFileSync('note1.txt'));
    }
});