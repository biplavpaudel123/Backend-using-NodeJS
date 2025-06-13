const express = require('express');
const path =  require ('path');
const messagesRouter= require('./routers/messages.router')
const friendsRouter= require('./routers/friends.router');
const { title } = require('process');

const PORT = 3000;
const app = express();
app.set('view engine','hbs');
app.set('views', path.join(__dirname,'views'));

app.use((req, res, next) => {
    const start = Date.now();  // current time in milliseconds since january,1,1970 
    console.log(`${req.method} ${req.url}`);//if it is placed below the next the req.url will have path with respect to routers
    next();                     //call to next middleware or the endpoint in this case 
    const end = Date.now();
    console.log(`Time ${end - start}`);
});
app.use(express.static(path.join(__dirname,"public")))
app.use(express.json()); //sets the req.body when the content-type is application/json 
app.get('/',(req,res)=>{
    res.set
    res.render('index.hbs',{
        title:"My site",
        caption:"The image is below me!!"
    });
})
app.use('/friends',friendsRouter);
app.use('/messages',messagesRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
