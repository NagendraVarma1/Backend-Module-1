const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Varma');
})

server.listen(4000)

