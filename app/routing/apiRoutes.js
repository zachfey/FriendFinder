var friends = require( '../data/friends.js');

module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        return res.json(friends);
    });

    app.post('/api/friends', function(req, res) {
        console.log('posting....');
        const userRes = req.body
        let minScore = 10000
        let matchIndex
        for (let i in friends){
            let score = 0;
            // console.log(friends[i].scores)

            for (let j = 0; j < 9; j++){
                console.log('index score' + j +  Math.abs(friends[i].scores[j] - userRes.scores[j]))
                score += Math.abs(parseInt(friends[i].scores[j]) - parseInt(userRes.scores[j]));
                console.log('total score: ' + score);
            }

            console.log('score ' + score)
            console.log('minscore ' + minScore);
            if (score < minScore){
                minScore = score;
                console.log('new min score: '+ minScore)
                matchIndex = i ;
            }
        }


        friends.push(userRes);
        console.log('matchIndex: ' + matchIndex)
        console.log(friends[matchIndex])
        return res.json(friends[matchIndex])
    })
}

//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.