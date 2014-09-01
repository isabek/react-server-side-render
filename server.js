var React = require("react"),
    Router = require("node-simple-router"),
    fs = require("fs"),
    http = require("http"),
    App = require("./App"),
    User = require('./User');

var router = new Router();

var PLACEHOLDER = 'If you see this then something is wrong.';
var Bundle = fs.readFileSync('./browser-bundle.js', {encoding: 'utf8'});
var TEMPLATE = fs.readFileSync('./index.html', {encoding: 'utf8'});


router.get('/', function (request, response) {
    response.end(TEMPLATE.replace(PLACEHOLDER, React.renderComponentToString(App())));
});

router.get('/user/:userId', function (request, response) {
    var userId = request.params.userId;
    response.end(TEMPLATE.replace(PLACEHOLDER, React.renderComponentToString(User({userId: userId }))));
});

router.get('/browser-bundle.js', function (request, response) {
    response.end(Bundle);
});

var server = http.createServer(router);

server.listen(3000);
console.log("Server is running on http://0.0.0.0:3000");
