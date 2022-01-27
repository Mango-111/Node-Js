import http from 'http';
const server= http.createServer((req,res)=>{
    if(req.url==="/")
    {
        res.write("Hello welcome to node js");
    }
    else if(req.url === "/about")
    {
        res.write("This is about page");
    }
    res.end()
})
server.listen(5000);
console.log("Server work on 5000");