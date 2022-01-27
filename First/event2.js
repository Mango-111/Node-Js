import events from 'events'
const eventEmitter = new events.EventEmitter();
//define method
eventEmitter.on('myevent',(arg)=>{console.log(`My event occured:name : ${arg.name} and age:${arg.age}`)})
let obj={
    name:"Ambika",
    age:20
}
eventEmitter.emit('myevent',obj);