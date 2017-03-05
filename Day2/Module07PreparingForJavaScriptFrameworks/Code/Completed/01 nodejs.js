/* Topic: A simple NodeJS HTTP server */

const http = require("http");
const port = 4000;

const requestHandler = (request, response) => {
    // Note: console.log() outputs to the terminal / cmd window
    console.log(request.url);

    // Note: Will always responde with this, no real page loading
    response.end("Hello Node.js Server!");
}

// Note: create a http server and provide it our requestHandler
const server = http.createServer(requestHandler);

// Note: Start listening or display any errors
server.listen(port, err => {
    if (err) {
        return console.log("something bad happened", err);
    }

    console.log(`server is listening on ${port}`);
});
