const EventEmitter = require ('events');
const celebrity = new EventEmitter;

celebrity.on('accident',()=>{
    console.log('oh no!!! rest in peace');
});

celebrity.on('race',(result)=>{
    if (result ==='win'){
        console.log(`Congrats for your  ${result}.`);
    }
    else if(result==='lose'){
        console.log (`You will not ${result} again.`)
    }
    else{
        console.log(`tough competition ${result}.`);
    }
});

process.on('exit',(code)=>{
console.log(`Process exited with code: ${code}`);
});

celebrity.emit('race','win');
celebrity.emit('accident');
celebrity.emit('race','lose');
celebrity.emit('race','tie');