const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add after body parser initialization!
app.use(expressValidator());

// routes
app.get('/', (req, res) => res.render('posts-index'))
app.get('/posts/new', (req,res) => res.render('post-new'))

require('./controllers/posts.js')(app);
require('./data/reddit-db');


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});