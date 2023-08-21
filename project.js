const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('<html>')
        res.write('<head><title>Project</title></head>');
        res.write('<body><form action="/message"><input type="text" name="message"/><button>Send</button></form></body>')
        res.write('</html>')
        return res.end();
    }
    res.setHeader('Content-Type', 'tex/html');
    res.write('<html>')
    res.write('<head><title>Message</title></head>')
    res.write('<body><h1>Welcome to the Home Page</h1></body>')
    res.write('</html>')
    res.end();
})

server.listen(3000)