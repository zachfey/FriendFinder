var path = require('path');

module.exports = (app) => {
    app.get('/:address', (req, res) => {
        switch(req.params.address){
            case 'survey':
                res.sendFile(path.join(__dirname, '../public/survey.html'))
                break
            default:
            res.sendFile(path.join(__dirname, '../public/home.html'))
                break
        }
    });

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'))});
}


// 1. Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

// 6. Determine the user's most compatible friend using the following as a guide:

//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example:
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
//    * The closest match will be the user with the least amount of difference.

// 7. Once you've found the current user's most compatible friend, display the result as a moda