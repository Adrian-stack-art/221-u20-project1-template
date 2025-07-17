const express = require('express')
const app = express();
app.use(express.static('client/public'));

const bodyParser = require('body-parser');
app.use(bodyParser.json({type: 'application/json'}));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})
app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})

let feedItemController = require('./Controller/feedController')

app.route('/api/allFeedItem')
    .get(feedItemController.allFeedItems)
    .post(feedItemController.allFeedItems)
app.route('/api/allFeedItem/:id')
    .get(feedItemController.getfeedItem)
    .delete(feedItemController.deleteAllfeedItem)
    .patch(feedItemController.UpdateFeedUsers)
    

       
       


app.listen(1337, () => console.log('Listening on port 1337.'))
