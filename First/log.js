let log={
    Info:function(message){
        console.log("info : " +message)
    },
    Warning:function(message){
        console.log("Warning : " +message)
    },
    Error:function(message){
        console.log("Error : " +message)
    }
}
module.exports=log;