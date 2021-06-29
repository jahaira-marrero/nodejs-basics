const http = require('http');
const port = 5050;

const dbConnection = true;
    if(!dbConnection){
        process.exit(1)
    };
 
const server = http.createServer((req, res) => {
    switch(req.url) {
        case '/':
    res.end('<html><head><title>First Node App</title></head><body><h1> Welcome to my new app!</h1></body></html>');
    break;
    case '/admin':
        res.end('Welcome to admin page');
    break;
    case '/user':
        res.end('<h1>Welcome to the user page</h1>');
    break;
    default:
        res.end('not found')
    };
});

server.listen(port,()=> {
    console.log(`server is now listening on port ${port}`);
});