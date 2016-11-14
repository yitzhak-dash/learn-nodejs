let express = require('express');
let app = express();

let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({extended: false});
let jsonParser = bodyParser.json()
const port = process.env.PORT || 3000;

// middleware for loading static files
app.use('/assets', express.static(__dirname + '/public'));

// custom middleware
app.use('/', function (req, res, next) {
    console.log(`Request URL: ${req.url}`);
    next();
});

app.get('/', function (req, res) {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="assets/style.css">
    <meta charset="UTF-8">
    <title>Test</title>
</head>
<body>
<h2>{Message}</h2>
</body>
</html>`)
});

app.get('/person/:id', function (req, res) {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Test</title>
</head>
<body>
<h2>Person: ${req.params.id}</h2>
<h3>Query string value: ${req.query.qstr}</h3>
</body>
</html>`)
});

// form value.
app.post('/person', urlencodedParser, function (req, res) {
    res.send('Thank you');
    console.log(req.body.firstName);
});

app.post('/personJson', jsonParser, function (req, res) {
    res.send('Thank you JSON');
    console.log(req.body.firstName);
});

app.get('/api', function (req, res) {
    res.json({firstName: 'Joe'});
});

app.listen(port);
