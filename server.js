var http = require("http");
var fs = require("fs");
var connect = require("connect");

var app = connect();

//Run one block of code after another:

/*

function doFirst(request, response, next) {
    console.log("Bacon");
    next(); // if it has this method it will go to the next object in the stack
}

function doSecond(request, response, next) {
    console.log("Tuna");
    next();
}

app.use(doFirst);
app.use(doSecond);

*/

//Run certain code on user's request:

function profile(request, response) {
    console.log("The user requested profile");
}

app.use('/profile', profile);

http.createServer(app).listen(80);
console.log("Server is running...");