let express = require('express');
let app = express();

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
</body>
</html>`)
});

app.get('/api', function (req, res) {
    res.json({firstName: 'Joe'});
});

app.listen(port);
