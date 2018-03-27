const express = require('express');
const hbs = require('hbs');
const scraper = require('./scraper');

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public/'));

const port = 8080;

let result = scraper.scrape();
app.get('/', (req, res) => {
    result.then((data) => {
        res.render('home.hbs', { data })
    })
});

app.listen(port, () => {
    console.log('app listening on port ' + port);
});