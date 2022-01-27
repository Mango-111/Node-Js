import fs from 'fs';
import http from 'http'
http.createServer((req,res)=>{
    let body =" ";
    if(req.method==="GET" && req.url==="/add"){
        res.writeHead(200,{'content-type':'text/html'});
        fs.readFile('./EmpForm.html','UTF-8',(err,data)=>{
            if(err) throw err;
            res.write(data);
            res.end()
        })
    }
    else if(req.method==="POST")
    {
        req.on('data',(data)=>{
            body +=data;
        });
        req.on('end',()=>{
            res.writeHead(200,{'content-type':'text/html'});
            fs.appendFileSync('empdetails.txt', body, (err) => {
                if (err) throw err;
                console.log("Saved");
            });
        });
    }
    else if (req.url === "/") {
        res.write("<h1>Employee Data</h1>")
        let data=fs.readFileSync('./empdetails.txt').toString();
        
        res.write("<a href='/add'>Add Employee</a> <br />")
        res.write(data);
    }
    else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`<h1>404 ERROR could not find that Page</h1>`)
    }
})
.listen(6677);
console.log("working on port 6677");