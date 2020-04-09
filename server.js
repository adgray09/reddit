const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.render('index'))

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});