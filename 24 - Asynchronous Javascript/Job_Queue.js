setTimeout(()=>{
console.log('1 the loneliest')
},0);
setTimeout(()=>{
console.log('2 the loneliest')
},10);

Promise.resolve('hi').then((message)=>{
    console.log('2'+ message)
})

console.log('3 its the crowd');