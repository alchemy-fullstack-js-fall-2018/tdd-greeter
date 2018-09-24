const http = require('http');
const { greet } = require('./lib/pleasantries');

http.createServer((req, res) => {
    const name = req.url.split('/')[1];
    console.log('>>' + name + '<<', typeof name);
    const greeting = greet(name);
    res.end(greeting);
}).listen(3000);
