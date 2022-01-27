import fs from 'fs'
fs.writeFile('notes.txt',"hello how r u",(err)=>{
    if(err) throw err;
    console.log("File write successful");
})