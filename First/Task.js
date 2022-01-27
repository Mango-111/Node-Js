import http from 'http';
import fs from 'fs'
const server= http.createServer((req,res)=>{
    if(req.url==="/")
    {
        res.write("Hello welcome to node js");
    }
    else if(req.url === "/readFile")
    {
        let data=fs.readFileSync('note1.txt');
            res.write(data.toString());
    }
    else if(req.url ==="/writeFile")
    {
        fs.writeFile('note1.txt',"Hii written in file",(err,data)=>{
            if(err) throw err;
        })
        res.write("written successfully");
    }
    else if(req.url==="/renameFile")
    {
        fs.rename('note1.txt','notes.txt',(err)=>{
            if(err) throw err
        })
        res.write("rename successful");
    }
    else if(req.url==="/appendFile"){
        fs.appendFile('note2.txt',"hello",(err)=>{
            if(err) throw err;
        })
        res.write("Append successful")
    }
    else if(req.url==="/deleteFile"){
        fs.unlink('note2.txt',(err)=>{
            if(err) throw err;
        })
        res.write("deleted the file");
    }
    res.end()
})
server.listen(5001);
console.log("Server work on 5001");