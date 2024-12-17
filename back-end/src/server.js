import express from 'express';

//im memory data base to store or keep tracks of upvotes/comments of each artciles
const artcileInfo = [
    {name: 'learn-node', upvotes:0},
    {name: 'learn-react', upvotes:0},
    {name: 'mongodb', upvote:0}
]
const app = express();
app.use(express.json());

app.post('/api/articles/:name/upvote', (req, res) => {
    const article = artcileInfo.find(a => a.name === req.params.name);
    article.upvotes +=1;

    res.send('Success! The article' + req.params.name + 'now has ' + article.upvotes + ' upvotes!' )
})

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

