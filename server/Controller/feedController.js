const { json } = require('express');
const feedItem = require('../model/feedItem');


let feedItem1 = feedItem.newFeedItem("rust", "this is a survival open world game", "https://rust.facepunch.com","https://is1-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/c6/1d/02/c61d02e2-e452-e8c5-cbf7-a15b6c1061d9/502b04f4-1725-467f-8b71-c43b18ee76ff_iPhone_6.5_-_View_1.jpg/230x0w.webp"); 

let feedItem2 = feedItem.newFeedItem("Gmod", "a ragdoll game where anything u want or can imangine u can create","https://gmod.facepunch.com","https://upload.wikimedia.org/wikipedia/commons/8/8c/Garry%27s_Mod_logo.png");

let feedItem3 = feedItem.newFeedItem("clatter","this is strageist game where u need quick thinking skills to preveil","https://store.steampowered.com","https://www.metacritic.com/a/img/catalog/provider/6/12/6-1-693137-52.jpg");

exports.allFeedItem =  [feedItem1, feedItem2, feedItem3]

exports.allFeedItems = (req,res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(exports.allFeedItem));
}
exports.getfeedItem = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    console.log(req.params.id);
    res.send(JSON.stringify(exports.allFeedItem[req.params.id]));
}

exports.saveFeedItems = (req, res) => {

    let user = req.body;
    console.log(feedItems);


    allFeedItem.push(feedItems);
    
    res.send(JSON.stringify(exports.allFeedItem));
}

exports.deleteAllfeedItem = (req, res) => {
    let id = req.params.id;

    console.log ("the id",  + id);

    exports.allFeedItem = exports.allFeedItem.splice(id, 1);

    console.log("3:" + exports.allFeedItem);

    res.send(exports.allFeedItem);
}
exports.UpdateFeedUsers = (req,res) => {

    let id = req.params.id;
    let feedItem1 = req.body

    let feedItem1ToEdit = exports.allFeedItem [id];
    console.log(feedItem1ToEdit);

    if (feedItem1.title) {
        feedItem1ToEdit.title = feedItem1.title;
    }

    if (feedItem1.body) {
        feedItem1ToEdit.body = feedItem1.body;
    }

    if (feedItem1.linkUrl) {
        feedItem1ToEdit.linkUrl = feedItem1.linkUrl;
    }

    if (feedItem1.imageUrl) {
        feedItem1ToEdit.imageUrl = feedItem1.imageUrl;
    }
    res.send(exports.allFeedItem)
}

