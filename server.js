var http = require("http");
var fs = require("fs");

//Send a 404 response if things go bad
function send404Response(response) {
    response.writeHead(404, {"Conten-Type": "text/plain"});
    response.write("Error 404: Page not found");
    response.end();
}

//Handle a user request
function onRequest(request, response) {

    // if the user's request is a GET request and if the user is going to the homepage

    if(request.method == 'GET' && request.url == '/') { 

        // send a success status and content type of html (because we need more than plain text now)

        response.writeHead(200, {"Conten-Type": "text/html"}); 

        // read the file "index.html" and stream it / write it / response it through the response object

        fs.createReadStream("./index.html").pipe(response); 
        
        //if the user tries to connect to another page that doesn't exist
        
    } else {
        send404Response(response);
    }
}

//Create a server and listen for requests on this port
http.createServer(onRequest).listen(80);
console.log("Server is now running...");