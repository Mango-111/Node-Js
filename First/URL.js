import url from 'url'
var adr='http://localhost:5000/default.htm?year=2017&month=february';
var q = url.parse(adr,true)
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.month);