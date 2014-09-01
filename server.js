var React = require("react"),
    Router = require("node-simple-router"),
    fs = require("fs"),
    http = require("http"),
    App = require("./App"),
    User = require('./User');

var router = new Router();

var MARKUP = 'markup';
var TEMPLATE = fs.readFileSync('./index.html', {encoding: 'utf8'});


router.get('/', function (request, response) {
    response.end(TEMPLATE.replace(MARKUP, React.renderComponentToString(App())));
});

router.get('/user/:userId', function (request, response) {
    var userId = request.params.userId;
    response.end(TEMPLATE.replace(MARKUP, React.renderComponentToString(User({userId: userId }))));
});

var server = http.createServer(router);

server.listen(3000);
console.log("Server is running on http://0.0.0.0:3000");
