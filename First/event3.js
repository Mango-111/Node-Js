import events from 'events'
function xyz(num)
{
    const eventEmitter = new events.EventEmitter();
    setTimeout(() => {
        for(let i=1;i<=num;i++){
            eventEmitter.emit('before',i);
            console.log('number:',+i);
            eventEmitter.emit('after',i);
        }
    }, 2000);
    return eventEmitter;
}
let lp=xyz(3);
lp.on('before',(data)=>{
    console.log('about to start'+data)
})
lp.on('after',(data)=>{
    console.log('completed'+data)
})