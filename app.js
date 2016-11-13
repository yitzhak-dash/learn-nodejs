var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

// transformed stream(may change the data)
var gzip = zlib.createGzip();

readable.pipe(writable);
// we're going from stream to stream to stream
// 1. read data, 2. compress data, 3. write compressed data
readable.pipe(gzip).pipe(compressed);