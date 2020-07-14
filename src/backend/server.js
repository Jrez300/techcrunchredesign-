const dotenv = require("dotenv")
dotenv.config()
//framework for Node.js
const express = require('express');
const app = express();
//body parsing middleware
const bodyParser = require('body-parser');
//framework that lets us access MongoDB in an object oriented way
const mongoose = require('mongoose');
//express middleware, allows restricted resources to be requested 
const cors = require('cors');
//add API endpoints with the schema created
const commentRoutes = express.Router()
const PORT = process.env.PORT || 4000;

let Comment = require('./comment.model')


app.use(cors());
app.use(bodyParser.json());

//---------------------------------------

//connect MongoDB using Mongoose
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-52z5g.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,{ useNewUrlParser: true,  useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', function(){

    console.log("MongoDB database connection established successfully")
})

//---------------------------------------



//adding endpoint delivering all comments
//GET is used to handle incomming request on /comments path
commentRoutes.route('/').get(function (req, res) {
    //find method retrieves list of comments,all results are added in JSON format
    Comment.find(function (err, comments) {
        if (err) {
            console.log(err);
        } else {
            res.json(comments);
        }
    });
});

//endpoint retrieving comments by ID 
//ID accessed via req.params.id 
//once object received, turn into JSON
commentRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Comment.findById(id, function (err, comment) {
        res.json(comment);
    });
});

//route to add new comment using POST method 
//accessing new coment with req.body
//new comment saved to database
commentRoutes.route('/add').post(function (req, res) {
    let comment = new Comment(req.body);
    comment.save()
        .then(comment => {
            res.status(200).json({ 'comment': 'comment added successfully' })
        })
        .catch(err => {
            res.status(400).send('adding a new comment failed');
        });
});

//router will take control of requests starting with /comments path
app.use('/comments', commentRoutes)

//server listening to port 4000
app.listen(PORT, function () {
    console.log("Server is running on Port:" + PORT)
})