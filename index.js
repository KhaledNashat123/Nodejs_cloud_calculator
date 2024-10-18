const http = require('http');
const url = require('url'); 

const server = http.createServer((req, res) => {
    const requestUrl = req.url;

    const parsedUrl = url.parse(requestUrl, true); 
    const a = parseInt(parsedUrl.query.a);
    const b = parseInt(parsedUrl.query.b);
    
    const pathname = parsedUrl.pathname; 

    if (requestUrl === '/favicon.ico') {
        res.writeHead(204); 
        res.end();
        return;
    }
    
    if (isNaN(a) || isNaN(b)) {
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.end('Please provide valid numbers for a and b.');
        return;
    }

    const queryKeys = Object.keys(parsedUrl.query);
    if (pathname === "/add" ) {
        const result = a + b ;
        res.write( `it is ${result}`)
    }
    else if (pathname === "/subtract" ) {
        const result = a - b ;
        res.write( `it is ${result}`)
    }
    else if (pathname === "/multiply" ) {
        const result = a * b ;
        res.write( `it is ${result}`)
    }
    else if (pathname === "/divide" ) {
        const result = a / b ;
        res.write( `it is ${result}`)
    }
    res.end();  
});

server.listen(3000);