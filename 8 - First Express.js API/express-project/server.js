const express = require('express');
const PORT = 3000;
const app = express();
const friends = [
    {
        id: '0',
        name: 'Biplav Paudel'
    }, {
        id: '1',
        name: 'Ram Paudel'
    }, {
        id: '2',
        name: 'Shyam Paudel'
    }
];

app.use((req, res, next) => {
    const start = Date.now();  // current time in milliseconds since january,1,1970 
    next();                     //call to next middleware or the endpoint in this case 
    const end = Date.now();
    console.log(`${req.method} ${req.url}`);
    console.log(`Time ${end - start}`);
});
app.use(express.json()); //sets the req.body when the content-type is application/json 

app.post('/friends', (req, res) => {
    if (!req.body.name) {
      return  res.status(400).json({  //what return does here is that if there is no friend name then end the route handler function here and we dont have to go further than this if statement
            error: 'Missing Friend Name',
        })
    }
    const newFRiend = {
        id: friends.length,
        name: req.body.name
    };
    friends.push(newFRiend);
    res.json(newFRiend);
});

app.get('/', (req, res) => {
    res.send('Hello this is the first server.');
});

app.get('/friends', (req, res) => {
    res.json(friends);
});
app.get('/friends/:friendsID', (req, res) => {
    const id = +req.params.friendsID;
    const friend = friends[id]
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(400).json({
            error: 'No friend with this friend ID',
        });
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
