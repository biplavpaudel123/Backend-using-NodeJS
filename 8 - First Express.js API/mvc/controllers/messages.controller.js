const path = require('path');
// linux /folder/files.jpg  windows \folder\files.jpg

function getMessages (req,res){
    const imagepath=path.join(__dirname,'..','public','messageImage.jpg')
    res.sendFile(imagepath);
// res.send('<ul> <li>Hello Biplav!!</li></ul>')
}

function postMessage(req,res){
    console.log('Updating Messages...');
}

module.exports={
 getMessages,postMessage,
}