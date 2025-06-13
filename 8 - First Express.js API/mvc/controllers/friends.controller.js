const model= require('../models/friends.models.js')

function postFriend(req, res){
    if (!req.body.name) {
      return  res.status(400).json({  //what return does here is that if there is no friend name then end the route handler function here and we dont have to go further than this if statement
            error: 'Missing Friend Name',
        })
    }
    const newFRiend = {
        id: model.length,
        name: req.body.name
    };
    model.push(newFRiend);
    res.json(newFRiend);
}

function getFriends (req, res){
    res.json(model)
}
function getOneFriend(req, res){
    const id = +req.params.friendsID;
    const friend = model[id]
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(400).json({
            error: 'No friend with this friend ID',
        });
    }
}

module.exports={
    postFriend,
    getFriends,
    getOneFriend
};