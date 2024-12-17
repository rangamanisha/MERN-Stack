import express from 'express';

//im memory data base to store or keep tracks of upvotes/comments of each artciles
const articleInfo = [
    {name: 'learn-node', upvotes:0, comments: []},
    {name: 'learn-react', upvotes:0, comments: []},
    {name: 'mongodb', upvote:0, comments:[]}
]
const app = express();
app.use(express.json());

app.post('/api/articles/:name/upvote', (req, res) => {
    const article = articleInfo.find(a => a.name === req.params.name);
    article.upvotes +=1;

    res.json(article)

})

app.post('/api/articles/:name/comments', (req, res) => {
    const {name} = req.params;
    const {postedBy, text} = req.body;

    const article = articleInfo.find(a => a.name === name);

    article.comments.push({
        postedBy,
        text,
    })

    res.json(article);
} )

// app.get('/hello', function(req, res) {
// });

// app.get('/hello/:name', function(req, res){
//     res.send('Hello, ' + req.params.name);
// })

// app.post('/hello', function(req, res){
//     res.send('Hello, ' + req.body.name+ ' from a POST endpoint!')
// })

app.listen(8000, function(){
    console.log('Server is listening on port 8000')

})

