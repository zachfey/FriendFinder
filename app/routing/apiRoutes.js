var friends = require( '../data/friends.js');

module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        return res.json(friends);
    });

    app.post('/api/friends', function(req, res) {
        console.log('posting....');
        console.log(req.body);
        console.log(friends);
        friends.push(req.body);
        console.log('added friend');
        console.log(friends);


        return res.json(req.body)
    })
}

//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.