const http = require('http');
const port = 5050;
const server = http.createServer((req, res) => {
    res.end('
        <html>
            <head>
                <title>First Node App</title>
            </head>
            <body>
                <h1> Welcome to my new app!</h1>
            </body>
        </html>
        ');
});

server.listen(port,()=> {
    console.log(`server is now listening on port ${port}`);
});