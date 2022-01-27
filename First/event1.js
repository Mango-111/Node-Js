import events from 'events'
const eventEmitter = new events.EventEmitter();
// define methods
let method1=()=> console.log("evnet 1");
let method2=()=> console.log("event 2 ");
//Add event listener 
eventEmitter.on("myevent",method1);
eventEmitter.on("myevent",method2);
//fire the named event
eventEmitter.emit("myevent");
//remove listner
eventEmitter.removeListener("myevent",method1);
eventEmitter.emit("myevent");