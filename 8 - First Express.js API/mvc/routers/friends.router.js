const express = require('express');

const friendsController= require('../controllers/friends.controller');

const friendsRouter=express.Router();

friendsRouter.post('/',friendsController.postFriend );
friendsRouter.get('/',friendsController.getFriends);
friendsRouter.get('/:friendsID', friendsController.getOneFriend );

module.exports= friendsRouter;