let http = require('http');
let fs = require('fs');

http.createServer(function (req, res) {

    if (req.url === '/') {
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }

    else if (req.url === '/api') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        let obj = {
            firstName: 'John',
            lastName: 'Doe'
        };
        res.end(JSON.stringify(obj));
    }
    else {
        res.writeHead(404);
        res.end();
    }
}).listen(1313, '127.0.0.1');