require('./models/db');

const express = require('express');
const path = require('path');
const expresshb = require('express-handlebars');
const bodyparser = require('body-parser');

const memberController = require('./controllers/memberController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

app.set('views', path.join(__dirname, './views/'));
app.engine('hbs', expresshb({extname: 'hbs', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use('/member', memberController); 